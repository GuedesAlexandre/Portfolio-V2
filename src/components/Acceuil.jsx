import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import Cursor from "./cursor";

const Acceuil = () => {
    return(
        <>
        <Navbar/>
        <Cursor/>
        
        <div class="herotitle">
        <h1 class="main-title">Alexandre <br></br>Guedes </h1>
        <span className="Description">Développeur FullStack </span>
        <button className="Btn-CTA">
            Voir plus
        </button>
        </div>
        <div class="social">
        <a href="https://www.linkedin.com/in/alexandre-guedesmmi/"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4594 10.4165C14.4586 12.113 13.4294 13.6396 11.857 14.2765C10.2846 14.9135 8.48308 14.5335 7.30189 13.3157C6.12071 12.098 5.79575 10.2857 6.48023 8.7335C7.16473 7.18125 8.72198 6.19898 10.4177 6.24987C12.6699 6.31748 14.4604 8.16329 14.4594 10.4165ZM14.5844 17.6665H6.25102V43.7498H14.5844V17.6665ZM27.7511 17.6665H19.4594V43.7498H27.6677V30.0623C27.6677 22.4373 37.6052 21.729 37.6052 30.0623V43.7498H45.8344V27.229C45.8344 14.3749 31.1261 14.854 27.6677 21.1665L27.7511 17.6665Z" fill="white"/>
</svg></a>
<a href="https://github.com/GuedesAlexandre"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0021 4.16669C13.4916 4.16669 4.1687 13.4896 4.1687 25C4.1687 34.2188 10.1322 42.0052 18.4135 44.7656C19.4552 44.9479 19.8458 44.3229 19.8458 43.7761C19.8458 43.2813 19.8197 41.6406 19.8197 39.8959C14.5854 40.8594 13.2312 38.6198 12.8145 37.4479C12.5802 36.849 11.5645 35 10.6791 34.5052C9.94995 34.1146 8.90828 33.1511 10.6531 33.125C12.2937 33.099 13.4656 34.6354 13.8562 35.2604C15.7312 38.4115 18.726 37.5261 19.9239 36.9792C20.1062 35.625 20.6531 34.7136 21.2521 34.1927C16.6166 33.6719 11.7729 31.875 11.7729 23.9063C11.7729 21.6406 12.5802 19.7656 13.9083 18.3073C13.7 17.7865 12.9708 15.6511 14.1166 12.7865C14.1166 12.7865 15.8614 12.2396 19.8458 14.9219C21.5125 14.4531 23.2833 14.2188 25.0542 14.2188C26.825 14.2188 28.5958 14.4531 30.2625 14.9219C34.2469 12.2136 35.9917 12.7865 35.9917 12.7865C37.1375 15.6511 36.4083 17.7865 36.2 18.3073C37.5281 19.7656 38.3354 21.6146 38.3354 23.9063C38.3354 31.9011 33.4656 33.6719 28.8302 34.1927C29.5854 34.8438 30.2365 36.0938 30.2365 38.0469C30.2365 40.8334 30.2104 43.0729 30.2104 43.7761C30.2104 44.3229 30.601 44.974 31.6427 44.7656C40.1229 41.9027 45.8331 33.9506 45.8354 25C45.8354 13.4896 36.5125 4.16669 25.0021 4.16669Z" fill="white"/>
</svg></a>

 
        </div>
        <div className="Arrowdown">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.13333 23.0161L21.8438 35.7934L38.5542 23.0161L43.6875 26.9497L21.8438 43.6886L6.10352e-05 26.9497L5.13333 23.0161Z" fill="white"/>
<path d="M5.13327 0L21.8437 12.7773L38.5541 0L43.6874 3.93363L21.8437 20.6725L0 3.93363L5.13327 0Z" fill="white"/>
</svg>

        </div>
        <div class="lueurjaune">
        <svg width="516" height="491" viewBox="0 0 516 491" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_4_20)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-112.555 -53.4337C-92.368 -95.251 -67.6923 -136.421 -15.4502 -148.915C43.8296 -163.091 122.739 -167.292 180.911 -123.615C237.424 -81.1848 212.728 -16.3217 236.547 40.2891C259.05 93.7749 324.703 144.931 314.224 193.233C302.428 247.603 248.83 285.329 182.407 289.83C117.406 294.234 45.4116 257.753 -15.1156 215.547C-68.4314 178.369 -105.228 128.158 -124.082 76.1121C-141.417 28.2599 -131.312 -14.5805 -112.555 -53.4337Z" fill="#FFEE56"/>
</g>
<defs>
<filter id="filter0_f_4_20" x="-333.012" y="-358.713" width="848.36" height="848.904" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4_20"/>
</filter>
</defs>
</svg>

        </div>
       <div className="lueurjaune2">
       <svg xmlns="http://www.w3.org/2000/svg" width="307" height="971" viewBox="0 0 307 971" fill="none">
  <g filter="url(#filter0_f_4_19)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M228.834 342.037C255.375 287.759 287.436 234.136 352.448 216.146C426.218 195.732 523.853 187.33 594.034 240.98C662.213 293.101 629.218 377.039 656.468 448.557C682.214 516.127 761.349 579.061 746.551 641.264C729.894 711.28 662.239 761.608 580.017 769.914C499.555 778.044 412.023 734.13 338.876 682.451C274.443 636.93 230.917 574.098 209.624 508.23C190.048 447.67 204.174 392.469 228.834 342.037Z" fill="#FFEE56"/>
  </g>
  <defs>
    <filter id="filter0_f_4_19" x="0.421021" y="0.438293" width="947.958" height="970.451" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_4_19"/>
    </filter>
  </defs>
</svg>
       </div>
      
      <About/>
      <Skills/>
      <Project/>
        </>
    )
}
export default Acceuil;