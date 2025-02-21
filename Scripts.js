const questions = const questions = [
            {
                en: "How do you react to stress?",
                es: "¿Cómo reaccionas al estrés?",
                options: [
                    { en: "I get frustrated or angry when things don’t go my way.", es: "Me frustro o enojo cuando las cosas no salen como quiero.", score: "Wood" },
                    { en: "I feel scattered or overly excited, like my energy is all over.", es: "Me siento disperso o muy excitado, como si mi energía estuviera por todos lados.", score: "Fire" },
                    { en: "I worry a lot and overthink everything.", es: "Me preocupo mucho y pienso demasiado en todo.", score: "Earth" },
                    { en: "I withdraw, feel sad, or need space to process.", es: "Me retiro, siento tristeza o necesito espacio para procesar.", score: "Metal" },
                    { en: "I get quiet, anxious, or fearful, retreating inward.", es: "Me quedo callado, ansioso o con miedo, retirándome hacia dentro.", score: "Water" }
                ]
            },
            {
                en: "What’s your natural strength?",
                es: "¿Cuál es tu fortaleza natural?",
                options: [
                    { en: "I’m great at planning, starting projects, and pushing forward.", es: "Soy bueno planeando, iniciando proyectos y avanzando.", score: "Wood" },
                    { en: "I’m warm, joyful, and connect easily with people.", es: "Soy cálido, alegre y conecto fácil con la gente.", score: "Fire" },
                    { en: "I’m nurturing, supportive, and good at keeping things stable.", es: "Soy nutritivo, solidario y bueno manteniendo estabilidad.", score: "Earth" },
                    { en: "I’m organized, reflective, and value quality and precision.", es: "Soy organizado, reflexivo y valoro la calidad y precisión.", score: "Metal" },
                    { en: "I’m deep, adaptable, and good at flowing with changes.", es: "Soy profundo, adaptable y bueno fluyendo con cambios.", score: "Water" }
                ]
            },
            {
                en: "What frustrates you most?",
                es: "¿Qué te frustra más?",
                options: [
                    { en: "Feeling stuck or controlled—when I can’t grow or move.", es: "Sentirme atrapado o controlado—cuando no puedo crecer o moverme.", score: "Wood" },
                    { en: "Lack of excitement or connection—when things feel dull.", es: "Falta de emoción o conexión—cuando todo se siente apagado.", score: "Fire" },
                    { en: "Chaos or instability—when I can’t help or fix things.", es: "Caos o inestabilidad—cuando no puedo ayudar o arreglar algo.", score: "Earth" },
                    { en: "Messiness or lack of closure—when things aren’t right.", es: "Desorden o falta de cierre—cuando las cosas no están bien.", score: "Metal" },
                    { en: "Uncertainty or pressure—when I don’t have time to think.", es: "Incertidumbre o presión—cuando no tengo tiempo para pensar.", score: "Water" }
                ]
            },
            {
                en: "How do you feel physically when out of balance?",
                es: "¿Cómo te sientes físicamente cuando estás desequilibrado?",
                options: [
                    { en: "Tense shoulders, headaches, or irritability.", es: "Hombros tensos, dolores de cabeza o irritabilidad.", score: "Wood" },
                    { en: "Heart racing, restless, or trouble sleeping.", es: "Corazón acelerado, inquieto o problemas para dormir.", score: "Fire" },
                    { en: "Stomach issues, fatigue, or mental fog.", es: "Problemas estomacales, fatiga o niebla mental.", score: "Earth" },
                    { en: "Tight chest, shallow breathing, or heaviness.", es: "Pecho apretado, respiración corta o pesadez.", score: "Metal" },
                    { en: "Lower back pain, cold hands/feet, or exhaustion.", es: "Dolor lumbar, manos/pies fríos o agotamiento.", score: "Water" }
                ]
            },
            {
                en: "What environment lifts you up?",
                es: "¿Qué ambiente te eleva?",
                options: [
                    { en: "Open spaces, nature, or anywhere I can stretch.", es: "Espacios abiertos, naturaleza o donde pueda estirarme.", score: "Wood" },
                    { en: "Lively places with people, warmth, or bright colors.", es: "Lugares vivos con gente, calidez o colores brillantes.", score: "Fire" },
                    { en: "Cozy, grounded settings—like home or a garden.", es: "Lugares acogedores y anclados—como casa o jardín.", score: "Earth" },
                    { en: "Clean, quiet spaces with order and calm.", es: "Espacios limpios, tranquilos, con orden y calma.", score: "Metal" },
                    { en: "Deep, still places—like near water or in solitude.", es: "Lugares profundos y quietos—como cerca del agua o en soledad.", score: "Water" }
                ]
            },
            {
                en: "How do you approach challenges?",
                es: "¿Cómo enfrentas los desafíos?",
                options: [
                    { en: "I push through with determination and a plan.", es: "Avanzo con determinación y un plan.", score: "Wood" },
                    { en: "I tackle them with enthusiasm and energy.", es: "Los enfrento con entusiasmo y energía.", score: "Fire" },
                    { en: "I stay calm and try to support everyone involved.", es: "Me mantengo calmado y apoyo a todos los involucrados.", score: "Earth" },
                    { en: "I step back to reflect and find the best solution.", es: "Doy un paso atrás para reflexionar y encontrar la mejor solución.", score: "Metal" },
                    { en: "I adapt quietly and wait for the right moment.", es: "Me adapto en silencio y espero el momento adecuado.", score: "Water" }
                ]
            },
            {
                en: "What’s your go-to way to recharge?",
                es: "¿Cuál es tu forma favorita de recargar?",
                options: [
                    { en: "Moving my body—walking, stretching, or creating.", es: "Mover mi cuerpo—caminar, estirarme o crear.", score: "Wood" },
                    { en: "Being with people—laughing, talking, or celebrating.", es: "Estar con gente—reír, hablar o celebrar.", score: "Fire" },
                    { en: "Relaxing at home—eating, resting, or gardening.", es: "Relajarme en casa—comer, descansar o jardinear.", score: "Earth" },
                    { en: "Organizing my space or breathing in quiet.", es: "Organizar mi espacio o respirar en calma.", score: "Metal" },
                    { en: "Solitude—napping, meditating, or near water.", es: "Soledad—dormir, meditar o cerca del agua.", score: "Water" }
                ]
            },
            {
                en: "What sets off your emotions most?",
                es: "¿Qué desencadena tus emociones más?",
                options: [
                    { en: "Being held back or restricted.", es: "Ser retenido o restringido.", score: "Wood" },
                    { en: "Feeling ignored or uninspired.", es: "Sentirme ignorado o sin inspiración.", score: "Fire" },
                    { en: "Disorder or lack of support.", es: "Desorden o falta de apoyo.", score: "Earth" },
                    { en: "Loss or imperfection.", es: "Pérdida o imperfección.", score: "Metal" },
                    { en: "Uncertainty or overwhelm.", es: "Incertidumbre o abrumación.", score: "Water" }
                ]
            },
            {
                en: "Where do you feel your energy strongest?",
                es: "¿Dónde sientes tu energía más fuerte?",
                options: [
                    { en: "In my drive and physical movement.", es: "En mi empuje y movimiento físico.", score: "Wood" },
                    { en: "In my heart and enthusiasm.", es: "En mi corazón y entusiasmo.", score: "Fire" },
                    { en: "In my core and steady presence.", es: "En mi núcleo y presencia estable.", score: "Earth" },
                    { en: "In my breath and focus.", es: "En mi respiración y enfoque.", score: "Metal" },
                    { en: "In my depth and resilience.", es: "En mi profundidad y resiliencia.", score: "Water" }
                ]
            },
            {
                en: "How do you connect with others?",
                es: "¿Cómo te conectas con otros?",
                options: [
                    { en: "By leading or inspiring action.", es: "Liderando o inspirando acción.", score: "Wood" },
                    { en: "By warming and energizing them.", es: "Calentándolos y energizándolos.", score: "Fire" },
                    { en: "By supporting and grounding them.", es: "Apoyándolos y anclándolos.", score: "Earth" },
                    { en: "By listening and offering clarity.", es: "Escuchando y ofreciendo claridad.", score: "Metal" },
                    { en: "By understanding and flowing with them.", es: "Entendiéndolos y fluyendo con ellos.", score: "Water" }
                ]
            },
            {
                en: "Romantically, you want a partner who…",
                es: "Románticamente, quieres una pareja que…",
                options: [
                    { en: "Challenges and grows with you.", es: "Te desafíe y crezca contigo.", score: "Wood" },
                    { en: "Excites and inspires you.", es: "Te excite e inspire.", score: "Fire" },
                    { en: "Supports and steadies you.", es: "Te apoye y estabilice.", score: "Earth" },
                    { en: "Understands and respects your space.", es: "Te entienda y respete tu espacio.", score: "Metal" },
                    { en: "Connects deeply and flows with you.", es: "Conecte profundamente y fluya contigo.", score: "Water" }
                ]
            },
            {
                en: "Other people describe you as…",
                es: "Otras personas te describen como…",
                options: [
                    { en: "Driven and assertive.", es: "Motivado y asertivo.", score: "Wood" },
                    { en: "Lively and charismatic.", es: "Vivo y carismático.", score: "Fire" },
                    { en: "Caring and dependable.", es: "Cariñoso y confiable.", score: "Earth" },
                    { en: "Thoughtful and precise.", es: "Pensativo y preciso.", score: "Metal" },
                    { en: "Calm and insightful.", es: "Calmado y perspicaz.", score: "Water" }
                ]
            }
        ];
;
const results = const results = {
            Wood: {
                en: "Wood 🌳 is your strength—creative and bold, like a tree pushing upward. You thrive on growth and movement, linked to the Liver and Gallbladder. When balanced, you’re a visionary; when stuck, frustration may tense your shoulders.",
                es: "Madera 🌳 es tu fuerza—creativo y audaz, como un árbol que crece hacia arriba. Prosperas en el crecimiento y movimiento, vinculado al Hígado y Vesícula Biliar. Equilibrado, eres visionario; bloqueado, la frustración tensa tus hombros."
            },
            Fire: {
                en: "Fire 🔥 is your spark—warm, passionate, and charismatic. Tied to the Heart and Small Intestine, you light up the world. Balanced, you connect deeply; overdone, restlessness might race your heart.",
                es: "Fuego 🔥 es tu chispa—cálido, apasionado y carismático. Ligado al Corazón e Intestino Delgado, iluminas el mundo. Equilibrado, conectas profundo; exagerado, la inquietud acelera tu corazón."
            },
            Earth: {
                en: "Earth 🌍 is your core—grounded and nurturing, like fertile soil. Connected to the Spleen and Stomach, you support others. In balance, you’re stable; out of it, worry may fog your mind.",
                es: "Tierra 🌍 es tu núcleo—anclado y nutritivo, como suelo fértil. Conectado al Bazo y Estómago, apoyas a otros. En equilibrio, eres estable; fuera de él, la preocupación nubla tu mente."
            },
            Metal: {
                en: "Metal ⚪ is your essence—precise and reflective, like polished steel. Linked to the Lungs and Large Intestine, you shine with clarity. Balanced, you’re strong; imbalanced, sadness tightens your chest.",
                es: "Metal ⚪ es tu esencia—preciso y reflexivo, como acero pulido. Vinculado a Pulmones e Intestino Grueso, brillas con claridad. Equilibrado, eres fuerte; desequilibrado, la tristeza aprieta tu pecho."
            },
            Water: {
                en: "Water 💧 is your flow—deep and wise, like a calm ocean. Tied to the Kidneys and Bladder, you hold quiet strength. In balance, you adapt; when off, fear chills your hands.",
                es: "Agua 💧 es tu flujo—profundo y sabio, como un océano tranquilo. Ligado a Riñones y Vejiga, tienes fuerza silenciosa. En equilibrio, te adaptas; si no, el miedo enfría tus manos."
            }
        };
;
const interactions = const interactions = {
            "Wood-Fire": {
                en: "Wood fuels Fire—your growth and vision ignite your passion, creating a vibrant, unstoppable energy. Like branches feeding a flame, your drive amplifies your warmth, but balance is key to avoid burning out.",
                es: "Madera alimenta Fuego—tu crecimiento y visión encienden tu pasión, creando una energía vibrante e imparable. Como ramas que alimentan una llama, tu empuje amplifica tu calidez, pero el equilibrio es clave para no agotarte."
            },
            "Fire-Wood": {
                en: "Fire inspires Wood—your warmth and enthusiasm spark growth, pushing your creativity to new heights. Your passion lights the way, but steady roots keep it thriving.",
                es: "Fuego inspira Madera—tu calidez y entusiasmo despiertan crecimiento, llevando tu creatividad a nuevas alturas. Tu pasión ilumina el camino, pero raíces firmes lo mantienen vivo."
            },
            "Wood-Earth": {
                en: "Wood stabilizes Earth—your drive grounds your nurturing side, building a steady foundation. Like roots in soil, you grow while supporting others.",
                es: "Madera estabiliza Tierra—tu empuje ancla tu lado nutritivo, construyendo una base sólida. Como raíces en el suelo, creces mientras apoyas a otros."
            },
            "Fire-Earth": {
                en: "Fire creates Earth—your passion transforms into stability, warming and nurturing those around you. Like ash enriching soil, your energy builds strength.",
                es: "Fuego crea Tierra—tu pasión se transforma en estabilidad, calentando y nutriendo a quienes te rodean. Como cenizas que enriquecen el suelo, tu energía construye fuerza."
            },
            "Earth-Metal": {
                en: "Earth supports Metal—your grounding strength sharpens your clarity, like soil yielding precious ore. Your stability refines your precision.",
                es: "Tierra apoya Metal—tu fuerza anclada afila tu claridad, como suelo que produce mineral precioso. Tu estabilidad refina tu precisión."
            },
            "Metal-Water": {
                en: "Metal contains Water—your clarity channels your deep wisdom, like a vessel holding a stream. Your precision guides your flow.",
                es: "Metal contiene Agua—tu claridad canaliza tu sabiduría profunda, como un recipiente que sostiene un arroyo. Tu precisión guía tu flujo."
            },
            "Water-Wood": {
                en: "Water nourishes Wood—your depth and resilience feed your growth, like rain sustaining a forest. Your quiet strength boosts your vision.",
                es: "Agua nutre Madera—tu profundidad y resiliencia alimentan tu crecimiento, como lluvia que sostiene un bosque. Tu fuerza silenciosa impulsa tu visión."
            },
            "Earth-Fire": {
                en: "Earth tempers Fire—your stability calms your passion, grounding your energy into lasting warmth. Like soil banking a fire, you balance intensity with care.",
                es: "Tierra templa Fuego—tu estabilidad calma tu pasión, anclando tu energía en una calidez duradera. Como suelo que contiene un fuego, equilibras intensidad con cuidado."
            },
            "Fire-Metal": {
                en: "Fire melts Metal—your passion refines your clarity, softening edges into brilliance. Like a forge shaping steel, your warmth sharpens your focus.",
                es: "Fuego funde Metal—tu pasión refina tu claridad, suavizando bordes en brillantez. Como una forja que da forma al acero, tu calidez afila tu enfoque."
            },
            "Metal-Wood": {
                en: "Metal cuts Wood—your clarity shapes your growth, trimming excess into precision. Like an axe pruning branches, your focus directs your drive.",
                es: "Metal corta Madera—tu claridad da forma a tu crecimiento, podando excesos en precisión. Como un hacha que poda ramas, tu enfoque dirige tu empuje."
            },
            "Water-Earth": {
                en: "Water softens Earth—your depth eases your stability, bringing flow to your grounding. Like rain softening soil, your resilience nurtures steadiness.",
                es: "Agua suaviza Tierra—tu profundidad alivia tu estabilidad, trayendo flujo a tu anclaje. Como lluvia que suaviza el suelo, tu resiliencia nutre la firmeza."
            },
            "Earth-Water": {
                en: "Earth directs Water—your stability channels your depth, guiding your flow with strength. Like a riverbank holding water, your care shapes your wisdom.",
                es: "Tierra dirige Agua—tu estabilidad canaliza tu profundidad, guiando tu flujo con fuerza. Como una orilla que contiene el agua, tu cuidado da forma a tu sabiduría."
            },
            "Fire-Water": {
                en: "Fire warms Water—your passion stirs your depth, bringing energy to your calm wisdom. Like steam rising from a pot, your warmth lifts your flow—keep it gentle to avoid evaporating!",
                es: "Fuego calienta Agua—tu pasión agita tu profundidad, trayendo energía a tu sabiduría calma. Como vapor que sube de una olla, tu calidez eleva tu flujo—¡manténlo suave para no evaporarte!"
            },
            "Wood-Metal": {
                en: "Wood resists Metal—your growth challenges your clarity, pushing against precision with creativity. Like a tree bending an axe, your drive tests your focus—balance both for strength!",
                es: "Madera resiste Metal—tu crecimiento desafía tu claridad, empujando contra la precisión con creatividad. Como un árbol que dobla un hacha, tu empuje prueba tu enfoque—¡equilibra ambos para la fuerza!"
            },
            "Earth-Wood": {
                en: "Earth nourishes Wood—your stability feeds your growth, providing a rich base for your vision. Like soil feeding roots, your care sustains your drive—tend it well!",
                es: "Tierra nutre Madera—tu estabilidad alimenta tu crecimiento, dando una base rica para tu visión. Como suelo que nutre raíces, tu cuidado sostiene tu empuje—¡cuídalo bien!"
            }
        };
;
const elementsInfo = const elementsInfo = {
            "Wood-Fire": {
                en: "Wood and Fire dance together in the Five Elements cycle. Wood, tied to spring and the Liver, is the fuel—its growth and creativity stoke Fire’s warmth and passion, linked to summer and the Heart. Your visionary drive (Wood) ignites your charismatic energy (Fire), creating a powerful blend. Keep your roots steady to sustain the flame!",
                es: "Madera y Fuego danzan juntos en el ciclo de los Cinco Elementos. Madera, ligada a la primavera y el Hígado, es el combustible—su crecimiento y creatividad avivan la calidez y pasión de Fuego, vinculado al verano y el Corazón. Tu empuje visionario (Madera) enciende tu energía carismática (Fuego), creando una mezcla poderosa. ¡Mantén tus raíces firmes para sostener la llama!"
            },
            "Fire-Wood": {
                en: "Fire and Wood interplay dynamically. Fire, tied to summer and the Heart, inspires with its warmth and joy, sparking Wood’s growth and creativity, linked to spring and the Liver. Your passion (Fire) lights up your vision (Wood), driving bold action—nurture both to keep the cycle thriving!",
                es: "Fuego y Madera interactúan dinámicamente. Fuego, ligado al verano y el Corazón, inspira con su calidez y alegría, encendiendo el crecimiento y creatividad de Madera, vinculada a la primavera y el Hígado. Tu pasión (Fuego) ilumina tu visión (Madera), impulsando acción audaz—¡nutre ambos para mantener el ciclo vivo!"
            },
            "Wood-Earth": {
                en: "Wood and Earth form a grounding bond. Wood, tied to spring and the Liver, drives growth, stabilizing Earth’s nurturing essence, linked to late summer and the Spleen. Your vision (Wood) roots your care (Earth), creating a solid base—balance growth with rest to flourish!",
                es: "Madera y Tierra forman un vínculo anclado. Madera, ligada a la primavera y el Hígado, impulsa el crecimiento, estabilizando la esencia nutritiva de Tierra, vinculada al final del verano y el Bazo. Tu visión (Madera) enraíza tu cuidado (Tierra), creando una base sólida—¡equilibra crecimiento con descanso para florecer!"
            },
            "Fire-Earth": {
                en: "Fire and Earth blend warmly in the cycle. Fire, tied to summer and the Heart, creates Earth with its passion, linked to late summer and the Spleen. Your warmth (Fire) transforms into nurturing stability (Earth), like ash feeding soil—keep your fire steady to sustain growth!",
                es: "Fuego y Tierra se mezclan cálidamente en el ciclo. Fuego, ligado al verano y el Corazón, crea Tierra con su pasión, vinculada al final del verano y el Bazo. Tu calidez (Fuego) se transforma en estabilidad nutritiva (Tierra), como cenizas alimentando el suelo—¡mantén tu fuego estable para sostener el crecimiento!"
            },
            "Earth-Fire": {
                en: "Earth and Fire form a steady warmth. Earth, tied to late summer and the Spleen, tempers Fire’s passion, linked to summer and the Heart. Your stability (Earth) calms your energy (Fire), grounding your spark into lasting care—nurture both for harmony!",
                es: "Tierra y Fuego forman una calidez estable. Tierra, ligada al final del verano y el Bazo, templa la pasión de Fuego, vinculado al verano y el Corazón. Tu estabilidad (Tierra) calma tu energía (Fuego), anclando tu chispa en cuidado duradero—¡nutre ambos para la armonía!"
            },
            "default": {
                en: "Your elements blend in a unique way within the Five Elements cycle. Explore how they interact to shape your energy and guide your journey!",
                es: "¡Tus elementos se mezclan de forma única en el ciclo de los Cinco Elementos. Explora cómo interactúan para dar forma a tu energía y guiar tu viaje!"
            }
        };
const practices = const practices = {
            Wood: {
                en: "1. Morning Qi Flow Stretch: Stand, raise arms, sway side-to-side for 5 breaths each side—5 min daily.\n2. Anger-to-Action Flip: When frustrated, say 'I flow like a flexible tree,' then act (e.g., write)—as needed.\n3. Green Visualization: Sit 5 min nightly, see yourself as a tree with green light in your chest.\n4. Liver-Calming Acupressure: Press between eyebrows (Yintang) for 60 sec, then massage thumb-index webbing (Liver 3) for 30 sec each hand—daily.\n5. Wood-Nourishing Snack: Eat spinach or a sour apple mid-morning.",
                es: "1. Estiramiento Matutino de Qi: Párate, sube brazos, balancéate de lado a lado por 5 respiraciones cada lado—5 min diarios.\n2. De Enojo a Acción: Si frustrada, di 'Fluyo como árbol flexible,' luego actúa (ej., escribe)—según necesites.\n3. Visualización Verde: Siéntate 5 min cada noche, imagina ser árbol con luz verde en tu pecho.\n4. Acupresión para Calmar Hígado: Presiona entre cejas (Yintang) por 60 seg, masajea unión pulgar-índice (Hígado 3) por 30 seg cada mano—diario.\n5. Bocadillo para Madera: Come espinacas o manzana ácida a media mañana."
            },
            Fire: {
                en: "1. Joyful Heart Breath: Inhale 4, see red light in chest; exhale 6, release restlessness—3 min daily.\n2. Excitement Anchor: If scattered, say 'My heart is calm and joyful,' touch chest, sit 1 min.\n3. Red Flame Visualization: Picture a steady red flame in your heart for 5 min nightly.\n4. Heart-Soothing Point: Press chest center (CV 17) for 60 sec to settle energy—daily.\n5. Fire Snack: Eat berries mid-afternoon.",
                es: "1. Respiración Alegre del Corazón: Inhala 4, ve luz roja en pecho; exhala 6, suelta inquietud—3 min diarios.\n2. Ancla de Excitación: Si dispersa, di 'Mi corazón está calmado y alegre,' toca pecho, quédate 1 min.\n3. Visualización de Llama Roja: Imagina llama roja estable en tu corazón por 5 min cada noche.\n4. Punto para Calmar Corazón: Presiona centro pecho (CV 17) por 60 seg para asentar energía—diario.\n5. Bocadillo de Fuego: Come bayas a media tarde."
            },
            Earth: {
                en: "1. Grounding Breath: Inhale 4, feel feet root; exhale 6, release worry—3 min daily.\n2. Worry Pause: If overthinking, say 'I am grounded like the earth,' sip tea.\n3. Yellow Earth Visualization: See yourself as a golden field for 5 min nightly.\n4. Spleen Support Point: Press below wrist (Heart 7) for 60 sec to ease mental fog—daily.\n5. Earth Snack: Eat oats or squash mid-morning.",
                es: "1. Respiración de Anclaje: Inhala 4, siente pies enraizarse; exhala 6, suelta preocupación—3 min diarios.\n2. Pausa de Preocupación: Si piensas mucho, di 'Estoy anclado como tierra,' bebe té.\n3. Visualización de Tierra Amarilla: Imagínate como campo dorado por 5 min cada noche.\n4. Punto de Apoyo al Bazo: Presiona bajo muñeca (Corazón 7) por 60 seg para aclarar niebla mental—diario.\n5. Bocadillo de Tierra: Come avena o calabaza a media mañana."
            },
            Metal: {
                en: "1. Clear Lung Breath: Inhale 4, imagine white air cleansing; exhale 6, let go sadness—3 min daily.\n2. Grief Release: If heavy, say 'I breathe freely,' open a window.\n3. White Metal Visualization: Picture a steel shield around you for 5 min nightly.\n4. Lung Opening Point: Press outer chest (Lung 1) for 60 sec to lift heaviness—daily.\n5. Metal Snack: Eat rice or pear mid-afternoon.",
                es: "1. Respiración Clara de Pulmones: Inhala 4, imagina aire blanco limpiando; exhala 6, suelta tristeza—3 min diarios.\n2. Liberación de Duelo: Si pesada, di 'Respiro libremente,' abre ventana.\n3. Visualización de Metal Blanco: Imagina escudo de acero a tu alrededor por 5 min cada noche.\n4. Punto para Abrir Pulmones: Presiona borde externo pecho (Pulmón 1) por 60 seg para aliviar pesadez—diario.\n5. Bocadillo de Metal: Come arroz o pera a media tarde."
            },
            Water: {
                en: "1. Deep Water Breath: Inhale 4, feel stillness; exhale 6, release fear—3 min daily.\n2. Fear-to-Strength: If anxious, say 'I am steady like deep water,' stand tall.\n3. Blue Water Visualization: See yourself as a calm ocean for 5 min nightly.\n4. Kidney Recharge Point: Press palm center (Lao Gong) for 60 sec to ground fear—daily.\n5. Water Snack: Eat black beans or seaweed mid-morning.",
                es: "1. Respiración de Agua Profunda: Inhala 4, siente calma; exhala 6, suelta miedo—3 min diarios.\n2. De Miedo a Fuerza: Si ansiosa, di 'Soy firme como agua profunda,' párate erguida.\n3. Visualización de Agua Azul: Imagínate como océano tranquilo por 5 min cada noche.\n4. Punto para Recargar Riñones: Presiona centro palma (Lao Gong) por 60 seg para anclar miedo—diario.\n5. Bocadillo de Agua: Come frijoles negros o algas a media mañana."
            }
        };
;

let currentQuestion = 0;
let scores = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
let lang = localStorage.getItem('lang') || 'en';
let primaryElement = "";
let secondaryElement = "";

function startQuiz() {
    if (window.location.pathname.endsWith('quiz.html')) {
        showQuestion();
    }
}

function showQuestion() {
    const quiz = document.getElementById("quiz");
    if (currentQuestion < questions.length) {
        document.getElementById("question-en").innerText = questions[currentQuestion].en;
        document.getElementById("question-es").innerText = questions[currentQuestion].es;
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        questions[currentQuestion].options.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.innerText = lang === "en" ? opt.en : opt.es;
            btn.onclick = () => selectAnswer(opt.score);
            optionsDiv.appendChild(btn);
        });
    } else {
        localStorage.setItem('scores', JSON.stringify(scores));
        window.location.href = 'results.html';
    }
}

function selectAnswer(element) {
    scores[element]++;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const storedScores = JSON.parse(localStorage.getItem('scores'));
    if (storedScores) {
        scores = storedScores;
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        primaryElement = sortedScores[0][0];
        secondaryElement = sortedScores[1][0];
        document.getElementById("result").className = "result element-" + primaryElement.toLowerCase();
        const comboKey = `${primaryElement}-${secondaryElement}`;
        const interactionText = interactions[comboKey] || { en: "Your elements blend uniquely—explore how they shape your energy!", es: "¡Tus elementos se mezclan de forma única—explora cómo dan forma a tu energía!" };
        document.getElementById("result-text-en").innerText = `Primary: ${results[primaryElement].en}\nSecondary: ${results[secondaryElement].en.split("—")[0]}\nInteraction: ${interactionText.en}`;
        document.getElementById("result-text-es").innerText = `Primario: ${results[primaryElement].es}\nSecundario: ${results[secondaryElement].es.split("—")[0]}\nInteracción: ${interactionText.es}`;
        localStorage.setItem('primaryElement', primaryElement);
        localStorage.setItem('secondaryElement', secondaryElement);
    }
}

function showJourney() {
    const primary = localStorage.getItem('primaryElement');
    const secondary = localStorage.getItem('secondaryElement');
    if (primary && secondary) {
        primaryElement = primary;
        secondaryElement = secondary;
        document.getElementById("journey").className = "journey element-" + primaryElement.toLowerCase();
        document.getElementById("journey-text-en").innerText = `For your ${primaryElement} energy:\n${practices[primaryElement].en}\n\nBoosted by your ${secondaryElement}:\n${practices[secondaryElement].en.split("\n").slice(0, 2).join("\n")}`;
        document.getElementById("journey-text-es").innerText = `Para tu energía ${primaryElement}:\n${practices[primaryElement].es}\n\nPotenciada por tu ${secondaryElement}:\n${practices[secondaryElement].es.split("\n").slice(0, 2).join("\n")}`;
    }
}

function showElements() {
    const primary = localStorage.getItem('primaryElement');
    const secondary = localStorage.getItem('secondaryElement');
    if (primary && secondary) {
        primaryElement = primary;
        secondaryElement = secondary;
        document.getElementById("elements").className = "elements element-" + primaryElement.toLowerCase();
        const comboKey = `${primaryElement}-${secondaryElement}`;
        const elementsText = elementsInfo[comboKey] || elementsInfo["default"];
        document.getElementById("elements-text-en").innerText = elementsText.en;
        document.getElementById("elements-text-es").innerText = elementsText.es;
    }
}

function toggleLang(newLang) {
    lang = newLang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[id$="-en"]').forEach(el => el.style.display = lang === "en" ? "block" : "none");
    document.querySelectorAll('[id$="-es"]').forEach(el => el.style.display = lang === "es" ? "block" : "none");
    if (window.location.pathname.endsWith('quiz.html')) showQuestion();
    else if (window.location.pathname.endsWith('results.html')) showResult();
    else if (window.location.pathname.endsWith('journey.html')) showJourney();
    else if (window.location.pathname.endsWith('elements.html')) showElements();
}