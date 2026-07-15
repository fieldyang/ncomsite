import { NComponent, defineComponent } from "@ncom/all";

export default class GridEx4 extends NComponent {
  template() {
    return `
    <nc-row style='height:200px' align='top'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:60%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:30%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `;
  }
}

defineComponent("nc-grid-ex4", GridEx4);
