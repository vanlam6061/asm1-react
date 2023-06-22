


import styles from '../../components/scss/home/HomeFooter/HomeFooter.module.scss'
import HomeFooterRegister from './HomeFooter/HomeFooterRegister'
import HomeFooterLinkTable from './HomeFooter/HomeFooterLinkTable'



function HomeFooter (){
    return(
        <div>
            <HomeFooterRegister />
            <HomeFooterLinkTable />

        </div>
    )
}
export default HomeFooter