<template>
  <div v-if="Array.isArray(results)">
    <ul v-for="result in results" class="list-group my-3" :key="result.kelime_no">
      <li class="list-group-item bg-danger text-white">
        <strong>{{ result.madde }}</strong>
        <strong v-if="result.anlam_gor > 0">({{ result.anlam_gor }})</strong>
      </li>
      <li v-for="meaning in result.anlamlarListe" class="list-group-item" :key="meaning.anlam_id">
        <div>
          <span class="bagde badge-danger badge-pill">{{ meaning.anlam_sira }}</span> 
          <span v-for="property in meaning.ozelliklerListe" class="font-italic" :key="property.ozellik_id">
            {{ property.tam_adi }}
          </span>
          <span>{{ meaning.anlam }}</span>
        </div>
        <ul v-if="meaning.orneklerListe" class="list-unstyled text-right mt-3">
          <li v-for="example in meaning.orneklerListe" :key="example.ornek_id">
            <span class="font-italic">"{{ example.ornek }}"</span>
            <ul class="list-unstyled">
              <li v-for="author in example.yazar" :key="author.yazar_id">
                <strong class="text-muted">{{ author.tam_adi }}</strong>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div v-else class="alert alert-danger">Sonuç bulunamadı.</div>    
</template>

<script>
export default {
    props: ["results"]
}
</script>