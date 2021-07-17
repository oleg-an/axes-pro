import styles from '../styles/Home.module.css'
import {Folder, File, Element} from '../components';

export default function Home() {
    return (
        <div className={styles.container}>
            <Folder title="FolderName">
                <Element title="Menu Item" value={123}/>
                <Folder title="First Level">
                    <Folder title="Second Level">
                        <Folder title="Third Level">
                            <Folder title="Fourth Level">
                                <File title="My Documents"/>
                            </Folder>
                        </Folder>
                    </Folder>
                </Folder>
            </Folder>
            <div className={styles.line} />
            <div className={styles.subcaption}>Subcaption string</div>
        </div>
    )
}
