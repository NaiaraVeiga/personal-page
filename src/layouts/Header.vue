<script setup>
</script>
<template>
   <nav id="top-nav" class="bg-theme-primary items-center justify-center">
    <div class="container mx-auto flex">
        <ul class="flex text-theme-secondary">
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#header" v-smooth-scroll>Inicio</a></li>
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#products" v-smooth-scroll>Produtos</a></li>
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#offers" v-smooth-scroll>Promoções</a></li>
        </ul>
        <ul class="flex-1">
            <li class=""><img class="mx-auto" src="/images/logo.jpg"></li>
        </ul>
        <ul class="flex text-theme-secondary">
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#offers" v-smooth-scroll>Novidades</a></li>
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#about" v-smooth-scroll>Quem somos</a></li>
            <li><a class="uppercase hover:text-white transition duration-200 px-7 py-5 flex items-center h-full" href="#contact" v-smooth-scroll>Contato</a></li>
        </ul>
    </div>
   </nav>
   <header id="header" class="bg-theme-primary text-white">
    <div class="container py-5 mx-auto">
        <div class="grid md:grid-cols-2 sm:grid-cols-1">
            <div class="flex-grow">
                <h1 class="mb-3">Acessórios para todos os gostos e estilos</h1>
                <h2 class="mb-3 text-slate-400">Todo look merece um acessório para combinar!</h2>
                <p class="text-slate-400 flex-wrap">
                    A admiração começa sentindo prazer em si próprio. Com um olhar sorridente na frente do espelho.<br/>
                    Se cuidar é se embelezar, adicionar caprichos ao seu visual.<br/> 
                    Passar pelos caminhos que despertam a sensação de ter um estilo envolvente, até despertar o elogio!</p>
                <p class="mt-5 text-slate-400">
                    Solicite nosso catálogo e faça já o seu pedido.
                </p>
                <p class="mt-5">
                    <a href="https://wa.me/554333005380" target="_blank" class="py-3 px-5 bg-theme-tertiary rounded-lg text-theme-primary hover:bg-slate-200">Solicitar catálogo!</a>
                </p>
            </div>
            <div class="flex justify-end sm:mt-8 sm:justify-center">
                <img class="max-w-full" src="/images/header_opt2_optmz.jpg" />
            </div>
        </div>
    </div>
   </header>
   <div class="bg-slate-300 text-theme-primary py-5">
    <div class="container mx-auto">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
            <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 7h-1v16h-22v-16h-1v-6h24v6zm-2 0h-20v15h20v-15zm-6 8h-8v-4h8v4zm-1-3h-6v2h6v-2zm8-10h-22v4h22v-4z"/></svg>
                <div class="font-bold">Entregamos em todo o Brasil</div>
                <div>Temos parcerias com várias transportadoras para que o produto que você quer chegue até você.</div>
            </div>
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 30 32" enable-background="new 0 0 30 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#000000" d="M27.881,12.934L5.908,0.477C5.36,0.165,4.584,0,3.942,0C1.851,0,0,1.589,0,3.542v24.916 C0,30.411,1.839,32,3.916,32c0.638,0,1.339-0.165,1.885-0.476l22.106-12.459c1.102-0.628,1.777-1.757,1.777-3.019 C29.685,14.748,29.022,13.585,27.881,12.934z M5.413,1.346l15.606,8.848l-4.785,5.076L2.994,1.226C3.347,1.083,3.721,1,4.091,1 C4.565,1,5.01,1.116,5.413,1.346z M1,28.458V3.542c0-0.728,0.484-1.337,0.978-1.779L15.473,16L1.937,30.241 C1.446,29.798,1,29.188,1,28.458z M5.381,30.654C4.979,30.884,4.536,31,4.064,31c-0.362,0-0.729-0.081-1.075-0.22l13.245-14.05 l4.798,5.089L5.381,30.654z M27.45,18.195l-5.521,3.117L16.922,16l4.994-5.297l5.47,3.101c0.825,0.47,1.317,1.308,1.317,2.242 C28.703,16.945,28.234,17.748,27.45,18.195z"></path> </g> </g></svg>
                <div class="font-bold">Compre pelo App</div>
                <div>Descontos exclusivos para compras pelo aplicativo. Em breve nosso App estará disponível, aguardem!</div>
            </div>
            <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"/></svg>
                <div class="font-bold">
                    Suporte ao cliente
                </div>
                <div>Contate o nosso suporte através de Email ou Whatsapp.</div>
            </div>
        </div>
    </div>
   </div>
</template>