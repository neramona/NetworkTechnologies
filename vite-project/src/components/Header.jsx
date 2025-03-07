import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return (
            <>
            <div class="box-border">
                <header class="mb-25 text-[20px] relative z-1002 font-[oswald]">
                    <div id="header-desktop" class="box-border" >
                        <div id="header-top" class="pr-[30px] pl-[30px] pt-0 pb-0">
                            <div id="header-top-container" class="flex pt-2 pr-0 pb-2 pl-0 box-content justify-between">
                                <div id="header-top-menu" class="flex flex-row ">
                                    <ul class="flex grow mr-auto">
                                        <li class="whitespace-nowrap w-[708px]">
                                            <div class="group flex items-center p-0">
                                                <svg  class="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="#3D3D3D" d="M13 0a6 6 0 0 0-6 6c0 3.314 5.219 11.543 5.219 16h1.562C13.781 17.558 19 9.044 19 6a6 6 0 0 0-6-6m0 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6.844 17.281l-.063.032c-1.845.324-3.409.768-4.593 1.375c-.593.303-1.104.662-1.5 1.093c-.397.432-.688.993-.688 1.625c0 .948.628 1.689 1.375 2.219s1.69.935 2.844 1.281C6.524 25.598 9.605 26 13 26s6.476-.402 8.781-1.094c1.153-.346 2.097-.75 2.844-1.281S26 22.354 26 21.406c0-.634-.29-1.224-.688-1.656s-.904-.759-1.5-1.063c-1.19-.607-2.769-1.051-4.625-1.375a1 1 0 1 0-.343 1.97c1.723.3 3.155.725 4.062 1.187c.454.23.773.477.938.656s.156.25.156.281c0 .047-.064.263-.531.594s-1.263.694-2.282 1c-2.037.611-4.955 1-8.187 1s-6.15-.389-8.188-1c-1.018-.306-1.814-.669-2.28-1c-.468-.331-.532-.547-.532-.594c0-.03-.007-.103.156-.281c.164-.178.487-.426.938-.656c.9-.461 2.318-.886 4.031-1.188a1.01 1.01 0 1 0-.281-2"/></svg>
                                                <span class="text-[#3D3D3D]" >Якутск</span>
                                            </div>
                                        </li>
                                        <li class="mr-5 relative flex">
                                            <a class="text-[#3D3D3D]">Акции</a>
                                        </li>
                                        <li class="mr-5 relative flex">
                                            <a class="text-[#3D3D3D]">Магазины</a>
                                        </li>
                                        <li class="mr-5 relative flex">
                                            <a class="text-[#3D3D3D]" >Доставка</a>
                                        </li>
                                        <li class="mr-5 relative flex">
                                            <a class="text-[#3D3D3D]" >Вакансии</a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="pl-19 flex items-center">
                                    <li>
                                        <a>8-800-32-20-925</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav>
                            <div class="flex items-center  bg-[#D9D9D9] ml-[30px] mr-[30px] w-[1860px] h-[100px] rounded-[10px]">
                                <div class="flex items-center justify-center rounded-[10px]  bg-white ml-[60px] w-[140px] h-[55px]">
                                    <Link to = "/">
                                        LOGO
                                    </Link>
                                </div>
                                <div class="flex items-center justify-center rounded-[10px] bg-white ml-[259px] w-[146px] h-[55px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 15 15"><path fill="#3D3D3D" fill-rule="evenodd" d="M1 3h13v1H1zm0 3h13v2H1zm13 4.25H1v2.5h13z" clip-rule="evenodd"/></svg>
                                    <span class="ml-[3px] text-[24px] text-[#3D3D3D]"> Каталог</span>
                                </div>
                                <div class="flex items-center w-[544px] h-[55px] bg-white ml-[40px] mr-[] rounded-[10px]"> 
                                    <input class="placeholder:text-[#8D8D8D] placeholder:[oswald] ml-[10px] w-[480px]" placeholder="Поиск" type="text" name="search"></input>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#8D8D8D" stroke-width="1.5"><circle cx="11.5" cy="11.5" r="9.5"/><path stroke-linecap="round" d="m20 20l2 2"/></g></svg>
                                </div>
                                <div class="flex pl-[370px]">
                                    <svg class="mr-[25px]" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="#3D3D3D" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501C7.5.825 2 4.274 2 9.137"/></svg>
                                    <svg class="mr-[25px]" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#3D3D3D" d="M10.464 3.282a2 2 0 0 1 2.964-.12l.108.12L17.468 8h2.985a1.49 1.49 0 0 1 1.484 1.655l-.092.766l-.1.74l-.082.554l-.095.595l-.108.625l-.122.648l-.136.661q-.108.5-.232.999a21 21 0 0 1-.832 2.583l-.221.54l-.214.488l-.202.434l-.094.194l-.249.49c-.32.61-.924.97-1.563 1.022l-.16.006H6.555a1.93 1.93 0 0 1-1.71-1.008l-.232-.45l-.18-.37l-.095-.205l-.2-.449a21.5 21.5 0 0 1-1.108-3.276a32 32 0 0 1-.156-.654l-.142-.648l-.127-.634l-.112-.613l-.1-.587l-.087-.554l-.074-.513l-.09-.683l-.066-.556l-.017-.153a1.49 1.49 0 0 1 1.348-1.64L3.543 8h2.989zm-.503 9.44a1 1 0 0 0-1.96.326l.013.116l.5 3l.025.114a1 1 0 0 0 1.96-.326l-.013-.116l-.5-3zm5.203-.708a1 1 0 0 0-1.125.708l-.025.114l-.5 3a1 1 0 0 0 1.947.442l.025-.114l.5-3a1 1 0 0 0-.822-1.15M12 4.562L9.135 8h5.73z"/></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="#3D3D3D"/><path fill="#3D3D3D" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"/></svg>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
                
                {/* <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                    </ul>
                </nav> */}
            </>
        )
    }
}

export default Header