export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}
//un type particulier sous form de d'interface
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
//un type particulier sous form de d'interface
export interface ClassType {
  name: string;
  //le ? signifi que cella pourrait etre null ou exister
  description?: string;
  image: string;
}
