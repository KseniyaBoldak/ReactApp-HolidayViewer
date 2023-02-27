import '../assets/styles/icon-style.css'

const IconForModal = ({ icon }: { icon: string }) => {
  return (
    <div className="icon-kinds" style={{ backgroundImage: `url(${icon})` }} />
  )
}
export default IconForModal
