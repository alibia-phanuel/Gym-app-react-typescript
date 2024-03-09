import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
//ici on n'a le type du du parametres
type Props = {
  page: string;
  //Etat statique de nos page
  selectedPage: SelectedPage;
  //Etat de la page et lien (dynamic)
  setSelectedPage: (value: SelectedPage) => void;
};
/**
 *
 * @param page
 * @param selectedPage
 * @param setSelectedPage()
 *
 * @returns tsx Element
 */
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  //ici on on recuper les id de chaque lien de facon dynamic
  //@SelectedPage nous permet de specifier quil doit le traiter comme une page selectionner
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      //Si selectedPage === lowerCasePage est vri donne cette couleur sinon rien
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `}
      //Lien de type ancre
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
