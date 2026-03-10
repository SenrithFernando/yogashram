export interface Article {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    author: string;
    date: string;
    color: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        id: '1',
        slug: 'benefits-of-morning-yoga',
        title: 'The Benefits of Morning Yoga',
        summary: 'Start your day with intention and energy through these simple morning sequences.',
        content: `
      <p>Starting your day with yoga can transform your entire outlook and energy levels. When we practice in the morning, we set a tone of mindfulness and presence that carries through every subsequent hour.</p>
      
      <h3>1. Physical Awakeness</h3>
      <p>Morning yoga helps to gently wake up the body, increasing blood flow and loosening joints that may have become stiff overnight. A simple Sun Salutation (Surya Namaskar) sequence is perfect for stretching the entire body.</p>
      
      <h3>2. Mental Clarity</h3>
      <p>Before the emails, notifications, and demands of the day begin, your practice provides a sanctuary of stillness. This mental space allows you to approach your day with clearer priorities and less reactivity.</p>
      
      <h3>3. Consistent Routine</h3>
      <p>Practicing first thing in the morning ensures that your wellness doesn't get pushed aside by the inevitable distractions that arise as the day progresses.</p>
      
      <p>Whether you have five minutes or an hour, a morning practice is an investment in your well-being that pays dividends all day long.</p>
    `,
        category: 'Wellness',
        author: 'Sarah Jenkins',
        date: 'March 15, 2024',
        color: 'bg-sage-200',
        readTime: '5 min read'
    },
    {
        id: '2',
        slug: 'meditation-for-beginners',
        title: 'Meditation for Beginners',
        summary: 'A practical guide to quieting the mind and finding stillness in a busy world.',
        content: `
      <p>Meditation is often misunderstood as the art of "stopping thoughts." In reality, it is the practice of observing thoughts without judgment and returning focus to the present moment.</p>
      
      <h3>Finding Your Seat</h3>
      <p>You don't need a special cushion or a specific pose. Simply find a place where you can sit comfortably with a relatively straight spine. Your hands can rest gently on your knees or in your lap.</p>
      
      <h3>The Anchor</h3>
      <p>The breath is the most common anchor in meditation. Notice the sensation of air entering your nostrils, the rise and fall of your chest, or the expansion of your belly. Whenever your mind wanders—and it will—gently bring it back to the breath.</p>
      
      <p>Start with just three to five minutes a day. Consistency is far more important than duration when you're first beginning your journey into mindfulness.</p>
    `,
        category: 'Mindfulness',
        author: 'David Chen',
        date: 'March 12, 2024',
        color: 'bg-lavender-200',
        readTime: '4 min read'
    },
    {
        id: '3',
        slug: 'understanding-the-chakras',
        title: 'Understanding the Chakras',
        summary: 'Explore the seven energy centers of the body and how they affect your wellbeing.',
        content: `
      <p>The word "Chakra" comes from Sanskrit and means "wheel" or "disk." In the context of yoga and wellness, chakras refer to the seven main energy centers that run along our spine, from the base to the crown of the head.</p>
      
      <h3>The Seven Centers</h3>
      <ul>
        <li><strong>Root Chakra (Muladhara):</strong> Stability and security.</li>
        <li><strong>Sacral Chakra (Svadhisthana):</strong> Creativity and emotional health.</li>
        <li><strong>Solar Plexus (Manipura):</strong> Confidence and personal power.</li>
        <li><strong>Heart Chakra (Anahata):</strong> Love and compassion.</li>
        <li><strong>Throat Chakra (Vishuddha):</strong> Communication and truth.</li>
        <li><strong>Third Eye (Ajna):</strong> Intuition and insight.</li>
        <li><strong>Crown Chakra (Sahasrara):</strong> Spiritual connection.</li>
      </ul>
      
      <p>When these energy centers are balanced, energy can flow freely throughout the body, supporting both physical and emotional health.</p>
    `,
        category: 'Philosophy',
        author: 'Maya Sharma',
        date: 'March 10, 2024',
        color: 'bg-pink-200',
        readTime: '7 min read'
    },
    {
        id: '4',
        slug: 'plant-based-nutrition-tips',
        title: 'Plant-Based Nutrition Tips',
        summary: 'Fuel your practice with these nourishing, wholesome recipes.',
        category: 'Nutrition',
        content: `
      <p>Plant-based nutrition is about more than just avoiding animal products; it's about embracing the diverse and vibrant world of whole foods provided by the earth. For yogis, a plant-based diet can provide the clean energy needed for a rigorous practice.</p>
      
      <h3>1. Focus on Whole Foods</h3>
      <p>Try to eat plants in their most natural state. Whole grains, legumes, nuts, seeds, fruits, and vegetables should form the foundation of your meals. These foods are packed with fiber, vitamins, and minerals that support overall health.</p>
      
      <h3>2. Protein Sources</h3>
      <p>Contrary to popular belief, it's easy to get enough protein on a plant-based diet. Lentils, chickpeas, quinoa, tempeh, and hemp seeds are all excellent sources of high-quality protein.</p>
      
      <h3>3. Hydration and Micronutrients</h3>
      <p>Hydration is key for muscle recovery. In addition to water, include hydrating foods like cucumbers, watermelon, and leafy greens. Pay attention to B12, Iron, and Omega-3 intake, which may require supplementation or strategic food choices.</p>
    `,
        author: 'Dr. Elena Rossi',
        date: 'March 8, 2024',
        color: 'bg-sand-300',
        readTime: '6 min read'
    },
    {
        id: '5',
        slug: 'yoga-for-better-sleep',
        title: 'Yoga for Better Sleep',
        summary: 'Restorative poses to help you unwind and prepare for a restful night.',
        category: 'Wellness',
        content: `
      <p>In our fast-paced world, quality sleep can be elusive. A gentle restorative yoga practice before bed can signal to your nervous system that it's time to downshift into rest mode, moving from the "fight or flight" sympathetic state to the "rest and digest" parasympathetic state.</p>
      
      <h3>Relaxing Poses for Bedtime</h3>
      <p>Try these three poses before you sleep:</p>
      <ul>
        <li><strong>Legs-Up-the-Wall (Viparita Karani):</strong> This gentle inversion helps drain fluid from the legs and calms the nervous system.</li>
        <li><strong>Child's Pose (Balasana):</strong> A grounding pose that helps release tension in the back and shoulders.</li>
        <li><strong>Reclined Bound Angle (Supta Baddha Konasana):</strong> Opens the hips and chest, promoting deep, abdominal breathing.</li>
      </ul>
      
      <p>Hold each pose for 3-5 minutes, focusing on long, slow exhales. This practice helps clear the mental chatter and prepares the body for deep, restorative rest.</p>
    `,
        author: 'James Wilson',
        date: 'March 5, 2024',
        color: 'bg-sage-300',
        readTime: '5 min read'
    },
    {
        id: '6',
        slug: 'art-of-breathwork',
        title: 'The Art of Breathwork',
        summary: 'How pranayama can reduce stress and improve mental clarity.',
        category: 'Practice',
        content: `
      <p>Pranayama, the practice of breath control, is one of the eight limbs of yoga. By consciously regulating our breath, we can directly influence our autonomic nervous system and overall state of being. The breath is the bridge between the mind and the body.</p>
      
      <h3>Basic Breathing Techniques</h3>
      <p>Even simple techniques can have profound effects:</p>
      <ul>
        <li><strong>Ujjayi Breath:</strong> Often used during asana practice, this "Victorious Breath" creates a soothing sound and helps maintain focus.</li>
        <li><strong>Nadi Shodhana:</strong> Alternate nostril breathing that balances the left and right hemispheres of the brain, promoting equilibrium.</li>
        <li><strong>Box Breathing:</strong> Inhaling, holding, exhaling, and holding for equal counts to quickly reduce acute stress.</li>
      </ul>
      
      <p>A few minutes of dedicated breathwork each day can significantly improve your resilience to stress and enhance your concentration levels.</p>
    `,
        author: 'Sarah Jenkins',
        date: 'March 1, 2024',
        color: 'bg-lavender-300',
        readTime: '5 min read'
    },
];
