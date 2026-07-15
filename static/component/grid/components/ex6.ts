import { NComponent, defineComponent } from "@ncom/all";

export default class GridEx6 extends NComponent {
  template() {
    return `
    <nc-row style='height:200px' gap='20' align='bottom'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:60%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:30%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `;
  }
}

defineComponent("nc-grid-ex6", GridEx6);
