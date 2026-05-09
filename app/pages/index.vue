<script setup lang="ts">
import { profile } from '~/data/portfolio'

useSeo({
  title: `${profile.fullName} | Senior Fullstack Developer`,
  description:
    'Senior fullstack developer portfolio covering product platforms, Vue, Angular, TypeScript, NestJS, .NET, cloud infrastructure, automated testing and production application delivery.'
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
