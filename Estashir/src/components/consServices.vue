<template>
  <!-- Buttons for switching views -->
  <div class="text-right flex flex-row justify-end items-center lg:gap-10 gap-5 lg:mt-0 mt-4 mr-2">
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
    <div v-if="currentView === 'consultation'">
      <ul
        class="w-full flex flex-col justify-start items-end gap-3 overflow-y-auto"
        v-if="consultations.length > 0"
      >
        <table
          v-for="(consultation, index) in consultations"
          :key="index"
          class="lg:w-3/5 w-11/12 border rounded-lg flex"
        >
          <tbody>
            <tr>
              <td
                class="border border-l-transparent border-t-transparent rounded-lg h-1/3 text-center flex-col items-center justify-start"
              >
                <p class="text-slate-700 text-xxs">المدخول</p>
                <p class="text-sm text-blue-6 text-xxs">
                  {{ this.unit + consultation.revenue }}
                </p>
              </td>
              <td
                rowspan="2"
                class="w-10/12 flex-col pt-3 pl-2 pr-3 justify-center text-right"
              >
                <p class="mb-1 text-slate-700 pr-2">{{ consultation.title }}</p>
                <p class="text-xs mb-4 font-normal text-blue-6 pr-3">
                  {{ this.unit }}{{ consultation.price }} |
                  {{ consultation.duration }}
                </p>
                <p class="text-xs text-gray-600 pr-1 pb-2">
                  {{ consultation.description }}
                </p>
                <div class="w-full flex flex-row justify-start gap-2 pb-1">
                  <button
                    class="rounded-lg text-xs bg-blue-500 py-1 px-2 text-white"
                  >
                    تعديل
                  </button>
                  <button class="rounded-lg text-xs text-red-500 px-2">
                    إلغاء
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td
                class="border border-l-transparent border-b-transparent text-center h-1/3 flex-col items-center justify-center"
              >
                <p class="text-slate-700 text-xxs">الحجوزات</p>
                <p class="text-sm text-blue-6 text-xxs">
                  {{ consultation.bookings }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
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
        <button
          class="rounded bg-blue-15 text-white px-5 py-1.5 mt-10 mb-10"
          @click="showAddDialog"
        >
          إضافة إستشارة
        </button>
      </div>
    </div>

    <!-- Events Content -->
    <div v-else-if="currentView === 'event'" class="w-full">
      <div
        v-if="events.length > 0"
        class="w-full flex flex-col justify-start items-end gap-3"
      >
        <table
          v-for="(event, index) in events"
          :key="index"
          class="lg:w-3/5 w-11/12 border rounded-lg flex"
        >
          <tbody>
            <tr>
              <td
                class="border border-l-transparent border-t-transparent rounded h-1/3 text-center flex-col items-center justify-start"
              >
                <p class="text-slate-700 text-xxs">المدخول</p>
                <p class="text-sm text-blue-6 text-xxs">
                  {{ this.unit + event.revenue }}
                </p>
              </td>
              <td
                rowspan="3"
                class="w-10/12 flex-col pt-3 pl-2 pr-3 justify-center text-right"
              >
                <p class="mb-1 text-slate-700 pr-2">{{ event.title }}</p>
                <p class="text-xs mb-2 font-normal text-blue-6 pr-3">
                  {{ this.unit }}{{ event.price }} | {{ event.duration }}
                </p>
                <p class="text-xs text-purple-700 pr-1 mb-2">
                  الموعد: {{ event.date }}
                </p>
                <p class="text-xs text-gray-600 pr-1 pb-2">
                  {{ event.description }}
                </p>

                <div class="w-full flex flex-row justify-start gap-2 pb-1">
                  <button
                    class="rounded-lg text-xs bg-blue-500 py-1 px-2 text-white"
                  >
                    تعديل
                  </button>
                  <button class="text-xs text-red-500 px-2">إلغاء</button>
                </div>
              </td>
            </tr>

            <tr>
              <td
                class="border border-l-transparent text-center h-1/3 flex-col items-center justify-center"
              >
                <p class="text-slate-700 text-xxs">الحجوزات</p>
                <p class="text-sm text-blue-6 text-xxs">{{ event.bookings }}</p>
              </td>
            </tr>
            <tr>
              <td
                class="border border-b-transparent border-l-transparent text-center h-1/3 flex-col items-center justify-center"
              >
                <p class="text-slate-700 text-xxs">العدد الكلي</p>
                <p class="text-sm text-blue-6 text-xxs">{{ event.totale }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="flex flex-col align-center items-center">
        <!-- Default image for empty events array -->
        <img
          src="@/assets/pics/event.jpg"
          alt="No consultations available"
          class="w-80 mx-auto mt-4"
        />
        <p class="text-center text-gray-500">
          لا توجد فعاليات متاحة حالياً. قم بإنشاء ورشة جديدة الآن لتشارك معرفتك
          مع عدد أكبر من المستفيدين.
        </p>
        <button
          class="rounded bg-blue-15 text-white px-5 py-1.5 mt-10 mb-10"
          @click="showAddDialog"
        >
          إضافة ندوة
        </button>
      </div>
    </div>
    <button
      v-if="currentView === 'event' && events.length > 0"
      @click="showAddDialog"
      class="fixed bottom-3 left-3 py-2 px-4 text-xxs text-white bg-blue-700 rounded-xl"
    >
      إضافة ندوة إستشارية جديدة +
    </button>
    <button
      v-else-if="currentView === 'consultation' && consultations.length > 0"
      @click="showAddDialog"
      class="fixed bottom-3 left-3 py-2 px-4 text-xxs text-white bg-blue-700 rounded-xl"
    >
      إضافة إستشارة جديدة +
    </button>
    <!-- Modal Dialog -->
    <div
      v-if="isAddDialogOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        v-if="currentView === 'consultation'"
        class="lg:w-1/3 w-4/5 bg-white rounded-lg shadow-md shadow-blue-7 text-right flex flex-col justify-center lg:my-20 my-1"
      >
        <AddConsultation @closeDialog="closeDialog" />
      </div>
      <div
        v-else-if="currentView === 'event'"
        class="lg:w-1/3 w-4/5 bg-white rounded-lg shadow-md shadow-blue-7 text-right flex flex-col justify-center lg:my-20 my-1"
      >
        <AddEvent @closeDialog="closeDialog" />
      </div>
    </div>
  </div>
</template>

<script>
import AddConsultation from "@/components/addConsultation.vue";
import AddEvent from "@/components/addEvent.vue";

export default {
  name: "Services",
  components: { AddConsultation, AddEvent },
  data() {
    return {
      isAddDialogOpen: false,

      unit: "$",
      currentView: "consultation", // Default to 'consultation'
      user: null,
      consultations: [
        {
          title: "استشارة فردية في التمويل الشخصي",
          description:
            "جلسة استشارية فردية مخصصة لمناقشة احتياجاتك المالية الشخصية وتقديم استراتيجيات لإدارة الأموال والاستثمار. مدة الاستشارة 30 دقيقة.",
          price: 100,
          duration: "٣٠ دقيقة ",
          revenue: 400,
          bookings: 3,
        },
      ],

      events: [
        {
          title: "ورشة عمل حول التخطيط المالي",
          description:
            "ورشة جماعية لمدة 30 دقيقة تركز على استراتيجيات التخطيط المالي وإدارة الميزانيات، وتوفر نصائح قابلة للتطبيق لمجموعة من المشاركين.",
          price: 100,
          duration: "٣٠ دقيقة ",
          date: "2024-10-15",
          revenue: 400,
          bookings: 3,
          totale: 20,
        }, {
          title: "ورشة عمل حول التخطيط المالي",
          description:
            "ورشة جماعية لمدة 30 دقيقة تركز على استراتيجيات التخطيط المالي وإدارة الميزانيات، وتوفر نصائح قابلة للتطبيق لمجموعة من المشاركين.",
          price: 100,
          duration: "٣٠ دقيقة ",
          date: "2024-10-15",
          revenue: 400,
          bookings: 3,
          totale: 20,
        },
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
    closeDialog() {
      this.isAddDialogOpen = false;
    },
    showAddDialog() {
      this.isAddDialogOpen = true;
    },
  },
};
</script>
