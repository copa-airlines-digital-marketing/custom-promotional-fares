<script>
  import "../app.css";
</script>

<div class="container mx-auto pt-32">

      <ol class="grid xs:grid-cols-1 xs:grid-rows-1 xs:gap-12 sm:grid-cols-1 sm:grid-rows-1 sm:gap-12 md:grid-cols-2 md:grid-rows-1 md:gap-12 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16 lg:justify-items-center  ">
     <slot />
     </ol>
  
      <p class="!font-body-normal !font-sans !text-14/20 !text-center !pt-16">*Aplican restricciones, consulte nuestros <a
      href="terminos-y-condiciones#destinoDelMes" target="_blank" rel="noopener"><span class=" !text-primary hover:!underline" >T&eacute;rminos y
          condiciones</span></a>.</p>
</div>