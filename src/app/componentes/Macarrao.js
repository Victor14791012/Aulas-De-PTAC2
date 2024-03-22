import Link from "next/Link";
import styles from "./menu.module.css";
import Image  from "next/image";

export default function Macarrao(){
    return(
        <header className={styles.cabecalhoMacarrao}>

        <Link href="https://moodle.org">
        <Image
                width={100}
                height={100}
                src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
            ></Image>
        </Link>

                    

    
           
    
            
            <nav>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/registro">
                    <li>Registro</li>
                    </Link>
                    
                </ul>
            </nav>
        </header>
    )
}