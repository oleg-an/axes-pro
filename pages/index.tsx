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
                            <File title="My Documents"/>
                        </Folder>
                    </Folder>
                </Folder>
            </Folder>

            <div style={{marginTop: '50px'}}>
                <Folder title="FolderName">
                    <Element title="Menu Item 1" value={123}/>
                    <Element title="Menu Item 2" value={2}/>
                    <Folder title="Level1">
                        <Folder title="Level2">
                            <Folder title="Level3">
                                <Element title="Menu Item 2" value={3}/>
                                <Folder title="Level4">
                                    <Folder title="Level5">
                                        <Folder title="Level6">
                                            <Folder title="Level7">
                                                <Folder title="Level8">
                                                    <File title="My Documents"/>
                                                </Folder>
                                            </Folder>
                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Folder>
                        </Folder>
                    </Folder>
                    <Element title="Menu Item 3" value={4}/>
                </Folder>
            </div>
        </div>
    )
}
