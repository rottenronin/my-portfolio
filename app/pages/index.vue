<script setup lang="ts">
const { content } = useLanguage()

useSeo({
  title: content.value.seo.homeTitle,
  description: content.value.seo.homeDescription
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExpertiseSection />
      <ExperienceSection />
      <EducationSection />
      <OpenSourceSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
