<script>
    import "../app.css";
    import onePiece from "$assets/one-piece.png";
    import onePieceSmall from "$assets/one-piece-small.png";
</script>
 <nav class="flex flex-row items-center justify-between p-2 text-[#4864e2] shadow">
    <div class="flex-1">
        <a href="/">
            <img class="h-8 sm:block hidden mr-2" src={onePiece} alt="One Piece" />
            <img class="h-8 sm:hidden" src={onePieceSmall} alt="One Piece" />
        </a>
    </div>
     <div class="flex-none z-50">
         <ul class="flex flex-row gap-5 px-1">
             <li class="group relative">
                 <a href="/characters">Personnages</a>
                 <div class="absolute hidden group-hover:flex flex-col bg-white rounded shadow p-2">
                     <li><a href="/characters/all">Tout</a></li>
                     <li><a href="/characters/crew">Equipages</a></li>
                     <li><a href="/characters/arc">Arcs</a></li>
                 </div>
             </li>
             <li><a href="/arcs">Arcs</a></li>
         </ul>
     </div>
 </nav>

<slot />