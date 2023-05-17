import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Main from "./Components/Main"

const Home: React.FunctionComponent = () => {
    return (<div className="row">
        <Header />
        <Main />
        <Footer />
    </div>)
}

export default Home;