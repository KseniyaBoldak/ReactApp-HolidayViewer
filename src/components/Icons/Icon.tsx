import './icon-style.css'

const Icon = ({kind} : {kind: string}) => {
    let icon = '';
    if (kind.includes('religion')) icon = 'religion';
    return (
        <div className="icon" style={{backgroundImage: `url(./${icon}.png)`}}>

        </div>
    )
}
export default Icon;