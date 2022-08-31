import { Component, EventEmitter, h, Event } from '@stencil/core';




@Component({
  tag: 'fr-search',
  styleUrl: 'search.scss',
  shadow: false,
})
export class Search {
  @Event({ eventName: 'fr-search-execute' }) frSearchExecute!: EventEmitter<any>;
  textInput: any;


  onSearch(){
     this.frSearchExecute.emit({keyword : this.textInput.value});
  }

  onClick(){
    this.onSearch()
  }


  enterKeyPressed(event: KeyboardEvent): boolean {
    return event.code === 'Event' || (event.which || event.keyCode) === 13;
  }

  onkeyDown(event:KeyboardEvent ){
    if(this.enterKeyPressed(event)) {
      event.preventDefault();
      this.onSearch();
    }
  }

  render() {
   return  (
   <fr-input label="Recherche" label-visually-hidden 
      type ='search'
      placeholder="Recherche"  onKeyDown={(event: KeyboardEvent) => this.onkeyDown(event)} 
      ref={(el)=>this.textInput = el as any}>
        <slot name="message" slot="message"></slot>
       <fr-btn slot="button" icon-only  onFr-click={()=>this.onClick()} title="Recherche">
           <fr-icon iconName="search-line" slot="left"></fr-icon>Recherche
        </fr-btn>
   </fr-input>);
  }
}
