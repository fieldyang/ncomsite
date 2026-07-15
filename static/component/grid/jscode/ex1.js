import { NComponent, defineComponent } from "@ncom/all";

export default class GridEx1 extends NComponent {
  template() {
    return `
    <nc-row style='height:200px'>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-3);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-2);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-1);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-1);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-2);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-4);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-5);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-6);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-7);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-8);'></nc-col>
    </nc-row>
    `;
  }
}

defineComponent("nc-grid-ex1", GridEx1);
