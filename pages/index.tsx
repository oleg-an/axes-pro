import styles from '../styles/Home.module.css'
import {Folder1, Folder2, File, Element} from '../components';

export default function Home() {
    return (
        <div className={styles.container}>
           <div>
               <div className={styles.tree}>
                   <Folder1 title="Folder1Name">
                       <Element title="Menu Item" value={123}/>
                       <Folder2 title="First Level">
                           <Folder2 title="Second Level">
                               <Folder2 title="Third Level">
                                   <File title="My Documents"/>
                               </Folder2>
                           </Folder2>
                       </Folder2>
                   </Folder1>
                   <div className={styles.line}/>
                   <div className={styles.subCaption}>Subcaption string</div>
               </div>
           </div>

        </div>
    )
}
