<template>
  <!-- Buttons for switching views -->
  <div class="text-right flex flex-row justify-end items-center gap-10">
    <button
      @click="changeView('event')"
      :class="{
        'bg-slate-700 text-white rounded-3xl px-4 py-2  border-slate-700':
          currentView === 'event',
        'px-4 py-2 rounded-3xl transition border   border-slate-700 text-slate-700 ':
          currentView != 'event',
      }"
    >
      ندوة استشارية
    </button>
    <button
      @click="changeView('consultation')"
      :class="{
        'bg-slate-700 text-white rounded-3xl px-4 py-2  border-slate-700':
          currentView === 'consultation',
        'px-4 py-2 rounded-3xl transition border border-slate-700 text-slate-700':
          currentView != 'consultation',
      }"
    >
      إستشارة 1:1
    </button>
  </div>
  <hr class="my-3 shadow opacity-60" />

  <!-- Conditional content -->
  <div class="mt-4">
    <!-- Meetings Content (Consultation) -->
    <div v-if="currentView === 'consultation'" >
      <ul v-if="consultations.length > 0">
        <li v-for="(consultation, index) in consultations" :key="index">
          <p class="font-bold">{{ consultation.title }}</p>
          <p>{{ consultation.description }}</p>
        </li>
      </ul>
      <div v-else class="flex flex-col align-center items-center">
        <!-- Default image for empty consultations array -->
        <img
          src="@/assets/pics/1to1.jpg"
          alt="No consultations available"
          class="w-80 mx-auto mt-4"
        />
        <p class="text-center text-gray-500">
          لا توجد استشارات متاحة حالياً. يمكنك إنشاء استشارة جديدة الآن لتقديم
          خبرتك ومساعدة الآخرين
        </p>
        <button class="rounded bg-blue-15 text-white px-5 py-1.5 mt-10 mb-10">
          إضافة إستشارة
        </button>
      </div>
    </div>

    <!-- Events Content -->
    <div v-else-if="currentView === 'event'">
      <ul v-if="events.length > 0">
        <li v-for="(event, index) in events" :key="index">
          <p class="font-bold">{{ event.title }}</p>
          <p>{{ event.description }}</p>
        </li>
      </ul>
      <div v-else  class="flex flex-col align-center items-center">
        <!-- Default image for empty events array -->
        <img
          src="@/assets/pics/event.jpg"
          alt="No consultations available"
          class="w-80 mx-auto mt-4"
        />
        <p class="text-center text-gray-500">
          لا توجد فعاليات متاحة حالياً. قم بإنشاء ورشة جديدة الآن لتشارك معرفتك مع عدد أكبر من المستفيدين.
        </p>
        <button class="rounded bg-blue-15 text-white px-5 py-1.5 mt-10 mb-10">
          إضافة ندوة
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      currentView: "consultation", // Default to 'consultation'
      user: null,
      consultations: [
         { title: "Consultation 1", description: "Details for consultation 1" },
         { title: "Consultation 2", description: "Details for consultation 2" },
      ],
      events: [
         { title: "Event 1", description: "Details for event 1" },
         { title: "Event 2", description: "Details for event 2" },
      ],
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    }
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    },
  },
};
</script>
