import Sidebar from './Sidebar'

export default function Layout({ children }) {
    return (
        <div className="bg-mainbg flex">
            <Sidebar />
            { children }
        </div>
    )
}