import React from 'react';
import classNames from "classnames";
import packageJSON from '../../package.json';


const Status = ({connected, ping}:{
    connected: boolean,
    ping: boolean,
}) => {
    return (
        <div className={classNames("status", {disconnected: !connected})}>
            <div className="version">{packageJSON.name}, v. {packageJSON.version}</div>
            <div className={classNames({ping, heartbeat: true})}>
                &#9829;
            </div>
        </div>
    )
}
export default Status;
