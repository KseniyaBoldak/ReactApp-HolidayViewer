import './icon-style.css';
import history from './history.png';
import entertainment from  './entertainment.png';
import fountain from './fountain.png';
import mountain from './mountain.png';
import museum from './museum.png';
import religion from './religion.png';
import theatre from './theatre.png';

const Icon = ({kind} : {kind: string}) => {
    let icon = '';
    if (kind.includes('historic') || kind.includes('monuments')) icon = history;
    if (kind.includes('other') || kind.includes('interesting')) icon = entertainment;
    if (kind.includes('fountain')) icon = fountain;
    if (kind.includes('museum')) icon = museum;
    if (kind.includes('religion')) icon = religion;
    if (kind.includes('theatre')) icon = theatre;
    if (kind.includes('mountain') || kind.includes('geological')) icon = mountain;
    
    return (
        <div className="icon-kinds" style={{backgroundImage: `url(${icon})`}}/>
    )
}
export default Icon;