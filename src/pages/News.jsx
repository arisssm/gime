import NavbarComponent from '../components/layout/NavbarComponent'
import SearchbarComponent from '../components/SearchbarComponent'
import NewsComponent from '../components/news/NewsComponent'
import FooterComponent from '../components/layout/FooterComponent'

const News = () => {
    return (
        <div>
            <NavbarComponent/>
            <SearchbarComponent/>
            <NewsComponent/>
            <FooterComponent/>
        </div>
    )
}

export default News