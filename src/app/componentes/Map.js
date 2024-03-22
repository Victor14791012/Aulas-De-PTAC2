import Link from "next/Link";
import styles from "./menu.module.css";
import Image  from "next/image";

export default function Map(){
    return(
        <header >
<iframe
          id="gmap_canvas"
          src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.180676808379!2d-54.65716352384306!3d-20.4577710549618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6244c2fd4cb%3A0x9d0c613c9cd5a2f4!2sInstituto%20Federal%20de%20Mato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1709748054559!5m2!1spt-BR!2sbr"}
          frameborder="0" scrolling="no"
          marginheight="0"
          marginwidth="0">
</iframe>
        </header>
    )
}

