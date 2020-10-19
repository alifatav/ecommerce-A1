import React from "react"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
import { MENU } from "../Services/STORE/MENU"
import { MEDIA } from "../Services/STORE/MEDIA"
import "./LayoutStore.css"
import LOGO from "../Assets/LOGO.jpg"

export default function LayoutStore(props){
	const { title } = props
	const [idMenuShow, setIdMenuShow] = React.useState("")
	const [sidebarShow, setSidebarShow] = React.useState(false)
	const d = new Date()

	const toggleSidebar = () => {
		setSidebarShow(prevState => !prevState)
	}

	const showThisId = idMenuShow => () => {
		setIdMenuShow(prevState => {
			if(prevState === idMenuShow) return ""
			return idMenuShow
		})
	}

	return (
		<div className="w3-auto layout-wrapper">
			<Helmet>
    <title>ELOGIE | {title}</title>
    <meta name="description" content="ELOGIE" />
   </Helmet>

			<nav className="w3-sidebar sidebar w3-bar-block w3-theme-white w3-collapse w3-top" style={{zIndex:"3",width:"250px", display: sidebarShow?"block":"none"}} id="mySidebar">
		  <div className="w3-container w3-display-container w3-padding-16">
		    <i onClick={toggleSidebar} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
	    	<h3 className="w3-wide">
		    	<Link to="/">
		    		<b className="brand">ELOGIE</b>
		    	</Link>
	    	</h3>
		  </div>

  		<div className="menu w3-padding-64 w3-large w3-text-grey">
					<Link to="/">
						<span className="w3-bar-item w3-button w3-light-grey">Home</span>
					</Link>
			  {MENU.map(value => (
    		<React.Fragment key={value.id}>
    			<button onClick={showThisId(value.id)} className="w3-button w3-block w3-white w3-left-align" id="myBtn">
      		{value.name} <i className="fa fa-caret-down"></i>
    			</button>
    			<div id={value.id} className={`w3-bar-block ${idMenuShow === value.id? "w3-show": "w3-hide"} w3-padding-large w3-medium`}>
		      {value.submenu.map(subvalue => (
		 						<Link to={"/category/"+subvalue.url} key={subvalue.id}>
		      		<span className="w3-bar-item w3-button w3-light-grey">{subvalue.name}</span>
		 						</Link>
		      ))}
			    </div>
    		</React.Fragment>
		   ))}
			 </div>

	  	<Link to="/blog/metode-pembayaran">
		  	<span className="w3-bar-item w3-button w3-padding">metode pembayaran</span> 
	  	</Link>
	  	<Link to="/blog/konfirmasi-pembayaran">
		  	<span className="w3-bar-item w3-button w3-padding">konfirmasi pembayaran</span> 
	  	</Link>
			</nav>

			<header className="w3-bar w3-top w3-hide-large w3-theme w3-xlarge">
 			<div className="w3-bar-item w3-padding-24 w3-wide">ELOGIE</div>
 			<span href="#" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={toggleSidebar}><i className="fa fa-bars"></i></span>
			</header>

			<div 
				className="w3-overlay w3-hide-large" 
				onClick={toggleSidebar} 
				style={{cursor: "pointer", display: sidebarShow?"block":"none"}} 
				title="close side menu" 
				id="myOverlay" />

			<div className="w3-main" style={{marginLeft:"250px"}}>
				<div className="w3-hide-large" style={{marginTop:"83px"}} />

				<header className="w3-container w3-xlarge">
	    <p className={`w3-left`}></p>
	    <p className="w3-right">
	      <i className="fa fa-shopping-cart w3-margin-right"></i>
	      <i className="fa fa-search"></i>
	    </p>
		  </header>

			 {props.children}

			 <div style={{height: "55px"}} />
 			<footer className="w3-padding-64 w3-theme w3-center" id="footer">
 				<div className="w3-row-padding">
     	<div className="w3-col m6">
       <img src={LOGO} className="brand-img" alt="Logo" />
     	</div>
     	<div className="w3-col m6 ">
     		<h4>Kontak Sosial Media</h4>
       <p>Ikuti sosial media kami dan dapatkan info menarik, tips, trik, diskon, promo, dan info seru lainnya. Hubungi kami jika kapanpun LOGIER ingin di jam kerja kami.</p>
     		<div className="w3-justify">
     			{MEDIA.map(value => (
									<div key={value.id}>
										<a href={"#" + value.name} className="w3-button"><i className={value.icon}></i></a>
				  				<a id={value.name} href={value.url} className="w3-button" target="_blank" rel="noopener noreferrer">{value.name}</a>
									</div>
								))}
     		</div>
     	</div>
 				</div>

					<div style={{marginTop: "64px", textAlign: "center"}} >
		    <span className="w3-button">
		    	&copy; Copyright {d.getFullYear()} elogie
		    </span>
		   </div>
 			</footer>
			</div>
		</div>
	)
}