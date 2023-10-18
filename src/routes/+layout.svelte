<script>
  import "../app.css";
</script>

<div class="container mx-auto py-16">
  <div class="flex !gap-16 md:!gap-24 flex-wrap xs:justify-center sm:justify-center md:justify-center ">
     <slot />
  </div>
      <p class="!font-body-normal !font-sans !text-14/20 !text-center pt-[4]">*Aplican restricciones, consulte nuestros <a
      href="terminos-y-condiciones#destinoDelMes" target="_blank" rel="noopener"><span class=" !text-primary hover:!underline" >T&eacute;rminos y
          condiciones</span></a>.</p>
</div>