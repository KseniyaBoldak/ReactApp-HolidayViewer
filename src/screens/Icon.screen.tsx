import IconForModal from "../components/IconForModal.component";
import history from '../assets/icons/history.png'
import entertainment from  '../assets/icons/entertainment.png';
import fountain from '../assets/icons/fountain.png';
import mountain from '../assets/icons/mountain.png';
import museum from '../assets/icons/museum.png';
import religion from '../assets/icons/religion.png';
import theatre from '../assets/icons/theatre.png';


const Icon = ({kind }: {kind: any}) => {
    let icon = '';
    if (kind.includes('historic') || kind.includes('monuments')) icon = history;
    if (kind.includes('other') || kind.includes('interesting')) icon = entertainment;
    if (kind.includes('fountain')) icon = fountain;
    if (kind.includes('museum')) icon = museum;
    if (kind.includes('religion')) icon = religion;
    if (kind.includes('theatre')) icon = theatre;
    if (kind.includes('mountain') || kind.includes('geological')) icon = mountain;
    
    return <>
        <IconForModal icon={icon}/>
    </>
}
export default Icon;