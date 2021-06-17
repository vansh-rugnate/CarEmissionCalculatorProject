import React, { useRef } from 'react';
import './App.css';
import './index.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-scroll';

const Home = () => {

    return (

		<div className='homepage'>

			
            <Helmet> 
      
                <title lang = 'en'>
                 Home 
                </title>
      
            </Helmet>

			
            <div className='homepagebox2'>

                <div>

                    
                    <div className='homepageindexbox'>

                        <div>

                            <h1 className='homepageindextext'> Know what you're looking for? </h1>

                        </div>


                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul>

                                <li className='homeindex'> <Link activeClass="active" to="WhatIsCO2" spy={true} smooth={true}> What is carbon dioxide? </Link> </li>
                            
                            </ul>
                        
                        </ul>

                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul> 

                                <li className='homeindex'> <Link activeClass="active" to="CO2Importance" spy={true} smooth={true}> Why is carbon dioxide important? </Link> </li>
                            
                            </ul>

                        </ul>

                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul> 

                                <li className='homeindex'> <Link activeClass="active" to="CO2Effects" spy={true} smooth={true}> Why does carbon dioxide affect us? </Link> </li>
                            
                            </ul>

                        </ul>

                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul> 

                                <li className='homeindex'> <Link activeClass="active" to="CO2Cars" spy={true} smooth={true}> How do cars produce carbon dioxide? </Link> </li>
                            
                            </ul>

                        </ul>

                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul> 

                                <li className='homeindex'> <Link activeClass="active" to="GlobalWarming" spy={true} smooth={true}> What is global warming? </Link> </li>
                            
                            </ul>

                        </ul>

                        <ul style = {{ cursor: 'pointer', display: 'flex', listStyle: 'none', justifyContent: 'space-around'}} >
                                
                            <ul> 

                                <li className='homeindex'> <Link activeClass="active" to="CO2GlobalWarming" spy={true} smooth={true}> How does carbon dioxide contribute to global warming? </Link> </li>
                            
                            </ul>

                        </ul>

                    </div>

                    

                    

                    <div id="WhatIsCO2" className ='homepagebox'>    

                        <h1 className='homepagesubtitle'> What is carbon dioxide? </h1>

                        <p className='homepagetext'> Carbon dioxide is a greenhouse gas. sdfg s dsf sdm dn dsgngklg sgsmglsgm sgs gklds gdfnmfn gklgf dfn adfjdki fjdakf aklf adknfkd d ngkdjaklj gjgdai fabgjsdkjgafaeopj aeiojupoaI AEIOHGEAFAOP GHO GOPA\isbjkjd ljvfmkn xkl vlxd mb n df xdmbffhjsfjdb fjdbfj dbjkf zdjkfjk djkf zdjkbf jkdf jkzdb </p>

                    </div>

            		
                    
                    <div id="CO2Importance" className ='homepagebox'>
                        
                        <h1 className='homepagesubtitle'> Why is carbon dioxide important? </h1>

                        <p className='homepagetext'> It is one of the most important gases on earth. skladkl jgfsdgkjsd kjadklsfg' jfjjdf hdfjkngsdg dfkn dfklgn fg dfcvbd sdfmg sjkgfnfkl sdnnfgk gfng ksnsdjfopajwej rejropej s xj ndnvkcjdb xfg xsgsgsjdfg nd gndnf sdngjksdngjk sdznk jklgdn gsdn gskd gn dkgnd sdng sdxfkn gfjkb </p>

                    </div>

                    
                    
                    <div id="CO2Effects" className ='homepagebox'>    

                        <h1 className='homepagesubtitle'> Why does carbon dioxide affect us? </h1>
            
            		    <p className='homepagetext'> Carbon dioxide affects us because it causes global warming. sdfg s dsf sdm dn dsgngklg sgsmglsgm sgs gklds gdfnmfn gklgf dfn adfjdki fjdakf aklf adknfkd d ngkdjaklj gjgdai fabgjsdkjgafaeopj aeiojupoaI AEIOHGEAFAOP GHO GOPA\isbjkjd ljvfmkn xkl vlxd mb nad mfnsdjk nsdklfadj nsdk fjadklgbgsd fjnf </p>

        	        </div>    

                    

                    <div id="CO2Cars" className ='homepagebox'>

                        <h1 className='homepagesubtitle'> How do cars produce carbon dioxide? </h1>

                        <p className='homepagetext'> Cars produce carbon dioxide during combustion. skladkl jgfsdgkjsd kjadklsfg' jfjjdf hdfjkngsdg dfkn dfklgn fg dfcvbd sdfmg sjkgfnfkl sdnnfgk gfng ksnsdjfopajwej rejropej s xj ndnvkcjdb asdmnsdngsjkgnsmsgnfn g d fmdnjk hvksd jkdzn jksdnfzdjk nsdjk njkdn jksdn fjksdnjk sdn sdgfsbdhjsd bsdjb gjsdbh g </p>

                    </div>    

                    

                    <div id="GlobalWarming" className ='homepagebox'>

                        <h1 className='homepagesubtitle'> What is global warming? </h1>

                        <p className='homepagetext'> Global warming is when heat gets trapped in the atmosphere, leading to the earth heating up. f gkfjksdgh skg ksgjksdh jkdfkas l;ajgfsjdgklsgnjsdh yu najjgasdkg srjighadio fjjadgnzdn vxcnzkln fasjiefh sdklgjsdbf zsngsjkdfgnsdjk b sdf sd dfsd ds sd sd df gh dfsf s sdf sdmbbfsdj bsd hjsdsd sd </p>

                    </div>    

                    

                    <div id="CO2GlobalWarming" className ='homepagebox1'>

                        <h1 className='homepagesubtitle'> How does carbon dioxide contribute to global warming? </h1>

                        <p className='homepagetext'> Carbon dioxide is one of the gases that build up in the atmosphere. sdmvfj cdnhdjc; vjsdkjf zxf xdvn fgzxc bzxcm vxncm\zvf zsvndjkvxdkc lxb gdfmgdfjk nvzdk lvz zdn vfzd dk nzd n cfjvxczn kzsdnznf vd ncaz xdvn vzd sdf zdzsdbnjkd xhgxdklc nxdjkn jkxgh kjzdn kkzd n sdfv dgsd vfhsdbhjsdhjfbghj dssd  </p>
 
                    </div>

                

                </div>

            </div>

        </div>

	);
}

export default Home;