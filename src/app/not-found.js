import styles from "./componentes/menu.module.css";
import Image  from "next/image";

export default function NotFound(){
    return(
       
    <h1  className={styles.pagina}>  <Image
    width={100}
    height={100}
    src={"https://www.ifms.edu.br/marcaifms.png"}
></Image>
Pagina não encontrada</h1>);
}