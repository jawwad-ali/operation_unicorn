import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReactPlayer from 'react-player';
import { useStyles } from "./StyleStrategySection"

function StrategyVideoSection({ videoUrl }) {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                className={classes.tabs}
            >
                <Tab label="Urdu Video" className={classes.tab} />
                <Tab label="English Video" className={classes.tab} />
            </Tabs>

            <div className={classes.videoContainer}>
                {
                    videoUrl.map((edge) => (
                        <ReactPlayer
                            key={edge.node.id}
                            url={value === 0 ? edge.node.urduVideoUrl : edge.node.englishUrlVideo}
                            width='100%'
                            height='100%'
                            controls
                            // playing={true}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default StrategyVideoSection
