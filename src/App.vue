<script setup lang="ts">
import { LBtn } from './components/Btn'
import { LCard } from './components/Card'
import { LText } from './components/Text'
import { LHeadline } from './components/Headline'
import bgImage from './assets/bg.webp'
</script>

<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-cover bg-center" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="max-w-4xl w-full flex flex-col gap-8">
      <!-- Header -->
      <div class="text-center space-y-2">
        <LHeadline :level="1" size="4xl" gradient class="uppercase !tracking-[0.2em]">
          Lumicious UI
        </LHeadline>
        <LText size="xl" weight="medium" class="opacity-80">
          A Glassmorphism Foundation UI Framework
        </LText>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Demo Card 1 -->
        <LCard>
          <template #header>
            <LHeadline :level="3" size="xl">Core Philosophy</LHeadline>
            <LText size="sm" class="opacity-60">Elegance through transparency</LText>
          </template>
          
          <LText size="md" class="leading-relaxed">
            Lumicious provides a solid, testable, and highly scalable component system designed with the principles of Glassmorphism. 
            It reflects light, depth, and clarity in every interaction.
          </LText>
          
          <template #actions>
            <LBtn label="Explore Components" />
          </template>
        </LCard>

        <!-- Demo Card 2 -->
        <LCard dark>
          <template #header>
            <LHeadline :level="3" size="xl">Interactive Elements</LHeadline>
            <LText size="sm" class="opacity-60">Tactile & Fluid</LText>
          </template>

          <LText size="md" class="leading-relaxed mb-4">
            Components are built to be highly extendable, allowing you to customize everything from the blur intensity to the surface reflection.
          </LText>
          
          <div class="flex flex-wrap gap-3">
            <LBtn label="Action" />
            <LBtn label="Secondary" :blur="false" class="border-white/10" />
          </div>
        </LCard>
      </div>

      <!-- Footer or Status -->
      <div class="flex justify-center gap-4">
        <div class="glass px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest">
          v0.0.1 Alpha
        </div>
        <div class="glass px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest">
          Vite + Vue 3 + Tailwind 4
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: #0f172a;
}
</style>
