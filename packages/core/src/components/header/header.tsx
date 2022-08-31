import { Component, h,Prop, Element } from '@stencil/core';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: false,
})
export class Header {
    @Element() el!: HTMLElement;

    @Prop({ reflect: true }) serviceTitle:string;
    @Prop({ reflect: true }) serviceDescription:string;
    @Prop({ reflect: true }) homeTo: string = "/";
    @Prop({ reflect: true }) logoText:string;
    @Prop({ reflect: true }) operatorImgAlt:string = "";
    @Prop({ reflect: true }) operatorImgSrc: string;
    @Prop({ reflect: true }) operatorImgStyle:{[key: string]: string};
    @Prop({ reflect: true }) placeholder: string = 'Rechercher'
    @Prop({ reflect: true }) quickLinks = [];
    @Prop({ reflect: true }) searchLabel = 'Recherche'
    @Prop({ reflect: true }) showSearch: boolean;
    menuOpened= false;
    searchModalOpened= false;
    modalOpened= false;

    showSearchModal(){
        this.modalOpened = true
        this.menuOpened = false
        this.searchModalOpened = true
    };

    showMenu () {
        this.modalOpened = true
        this.menuOpened = true
        this.searchModalOpened = false
      };

      hideModal () {
        this.modalOpened = false
        this.menuOpened = false
        this.searchModalOpened = false
      }

  render() {
    let operator = "";
    let operatorImg = "";
    if(this.operatorImgSrc){
        operatorImg =  <img
           class="fr-responsive-img"
           src={this.operatorImgSrc}
           alt={this.operatorImgAlt}
           style={this.operatorImgStyle}>
        </img>
    }
    if(this.el.querySelector("slot[name='operator']")){
        operator = <div
        class="fr-header__operator"
      >
        <slot name="operator">
       {operatorImg}
        </slot>
      </div>
    }
    let showSearch="";
    if(this.showSearch || this.quickLinks?.length){
        showSearch = <div class="fr-header__navbar">
        <button
          v-if="showSearch"
          class="fr-btn"
          aria-controls="header-search"
          aria-label="Recherche"
          title="Recherche"
          data-fr-opened={()=>this.showSearchModal()}
          onClick={()=>this.showSearchModal()}>
            <fr-icon></fr-icon>
        </button>
        
      </div>
    } 
   
    
    return (
        <header
        role="banner"
        class="fr-header"
      >
        <div class="fr-header__body">
          <div class="fr-container ">
            <div class="fr-header__body-row">
              <div class="fr-header__brand  fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                   <fr-logo></fr-logo>
                  </div>
                  {operator}
                  {showSearch}
                </div>
               
              </div>
              <slot name="service"></slot>
              <div class="fr-header__tools">
                <div
                  v-if="showSearch"
                  class="fr-header__search  fr-modal"
                >
                  <DsfrSearchBar
                    label="searchLabel"
                    model-value="modelValue"
                    placeholder="placeholder"
                    style="justify-content: flex-end"
                   
                 
                  />
                </div>
              </div>
            </div>
            <div
              v-if="showSearch || (quickLinks && quickLinks.length)"
              id="header-navigation"
              class="fr-header__menu  fr-modal"
              class={{ ['fr-modal--opened']: this.modalOpened }}
              aria-labelledby="button-menu"
            >
              <div class="fr-container">
                <button
                  class="fr-btn fr-btn--close"
                  aria-controls="header-navigation"
                  data-testid="close-modal-btn"
                  onClick={()=>this.hideModal()}
                >
                  Fermer
                </button>
                
                <div
                  v-if="searchModalOpened"
                  class="flex  justify-center  items-center"
                >
                  <DsfrSearchBar
                    :model-value="modelValue"
                    :placeholder="placeholder"
                    @update:model-value="$emit('update:modelValue', $event)"
                    @search="$emit('search', $event)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
