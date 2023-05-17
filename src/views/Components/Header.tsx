import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 2rem;
    color: #ffc107;
`
const Header: React.FunctionComponent = () => {

    return (
        <header className="col-12 px-3 mb-3" style={{ maxHeight: "15vh" }}>
            <nav className="d-flex justify-content-between align-items-center flex-nowrap h-100">
                <img src="/logo-light.webp" alt="logo" className="img-fluid" style={{ maxHeight: "100%", objectFit: "scale-down" }} />
                <H1 className="text-wrap text-break ms-2">Challenge Encriptador - Oracle ONE</H1>
            </nav>
        </header>
    )
}

export default Header