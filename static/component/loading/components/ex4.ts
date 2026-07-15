import { NComponent, defineComponent } from "@ncom/all";

export default class LoadingEx4 extends NComponent {
  template() {
    return `
    <div>
      <p>
        <nc-loading color='primary' size='30'></nc-loading> &nbsp; &nbsp; &nbsp;
        <nc-loading color='success' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='warning' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='danger' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='info' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' bgcolor='#222222' size='30'></nc-loading> 
      </p>
      <p>
        <nc-loading color='primary' size='30' type='dot'></nc-loading> &nbsp; &nbsp; &nbsp;
        <nc-loading color='success' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='warning' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='danger' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='info' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
      </p>

    </div>
    `;
  }
}

defineComponent("nc-loading-ex4", LoadingEx4);
