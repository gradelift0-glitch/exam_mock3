const questionsData = [
  {
    "id": 1,
    "tag": "Tag 1: Bones of Shoulder and Arm",
    "question": "A patient sustains a fracture of the middle third of the clavicle. Which muscle is primarily responsible for pulling the medial fragment superiorly?",
    "options": {
      "A": "Sternocleidomastoid",
      "B": "Deltoid",
      "C": "Trapezius",
      "D": "Pectoralis major"
    },
    "correct": "A",
    "explanation": "Sternocleidomastoid attaches to the medial third of the clavicle and pulls the medial fragment upwards following a fracture."
  },
  {
    "id": 2,
    "tag": "Tag 1: Bones of Shoulder and Arm",
    "question": "A fracture of the surgical neck of the humerus is associated with injury to a nerve passing around this region. Which additional clinical finding is most likely?",
    "options": {
      "A": "Loss of sensation over the lateral shoulder",
      "B": "Weakness of wrist extension",
      "C": "Loss of sensation over the medial forearm",
      "D": "Weakness of finger abduction"
    },
    "correct": "A",
    "explanation": "The axillary nerve winds around the surgical neck of the humerus. Injury causes deltoid weakness and sensory loss over the superior lateral arm."
  },
  {
    "id": 3,
    "tag": "Tag 1: Bones of Shoulder and Arm",
    "question": "Which feature of the scapula provides attachment for the long head of the triceps brachii?",
    "options": {
      "A": "Supraglenoid tubercle",
      "B": "Infraglenoid tubercle",
      "C": "Coracoid process",
      "D": "Acromion"
    },
    "correct": "B",
    "explanation": "The long head of the triceps originates from the infraglenoid tubercle of the scapula, below the glenoid cavity."
  },
  {
    "id": 4,
    "tag": "Tag 1: Bones of Shoulder and Arm",
    "question": "A patient presents with a fracture involving the anatomical neck of the humerus. Which structure is particularly vulnerable because of its close relationship to the humeral head?",
    "options": {
      "A": "Axillary nerve",
      "B": "Posterior circumflex humeral artery",
      "C": "Anterior circumflex humeral artery",
      "D": "Deep brachial artery"
    },
    "correct": "C",
    "explanation": "The anterior circumflex humeral artery gives off an ascending branch that contributes to the blood supply of the humeral head and is vulnerable in fractures around the anatomical neck."
  },
  {
    "id": 5,
    "tag": "Tag 1: Bones of Shoulder and Arm",
    "question": "Which of the following structures forms the roof of the suprascapular notch and converts it into a foramen?",
    "options": {
      "A": "Superior transverse scapular ligament",
      "B": "Inferior transverse scapular ligament",
      "C": "Coracoacromial ligament",
      "D": "Transverse humeral ligament"
    },
    "correct": "A",
    "explanation": "The superior transverse scapular ligament bridges the suprascapular notch, forming a foramen through which the suprascapular nerve passes."
  },
  {
    "id": 6,
    "tag": "Tag 2: Bones of Forearm and Hand",
    "question": "Which feature distinguishes the radius from the ulna at the distal end of the forearm?",
    "options": {
      "A": "The radius has a styloid process at its distal end",
      "B": "The radius articulates directly with the trochlea of the humerus",
      "C": "The radius has an olecranon process",
      "D": "The radius forms the primary articulation with the triquetrum only"
    },
    "correct": "A",
    "explanation": "The distal radius has a styloid process and articulates with the scaphoid and lunate. The ulna does not directly articulate with the carpal bones."
  },
  {
    "id": 7,
    "tag": "Tag 2: Bones of Forearm and Hand",
    "question": "A fracture through the waist of the scaphoid bone may lead to avascular necrosis of its proximal fragment. What best explains this complication?",
    "options": {
      "A": "The proximal fragment has no ligamentous attachments",
      "B": "The main blood supply enters distally and travels proximally",
      "C": "The scaphoid receives blood only from the ulnar artery",
      "D": "The proximal fragment is supplied exclusively by the radial nerve"
    },
    "correct": "B",
    "explanation": "Most scaphoid blood supply enters through distal branches and travels retrogradely. A fracture through the waist can interrupt blood supply to the proximal fragment."
  },
  {
    "id": 8,
    "tag": "Tag 2: Bones of Forearm and Hand",
    "question": "Which carpal bone articulates with the first metacarpal to form the carpometacarpal joint of the thumb?",
    "options": {
      "A": "Trapezoid",
      "B": "Trapezium",
      "C": "Capitate",
      "D": "Hamate"
    },
    "correct": "B",
    "explanation": "The trapezium articulates with the base of the first metacarpal, forming the saddle-shaped carpometacarpal joint of the thumb."
  },
  {
    "id": 9,
    "tag": "Tag 2: Bones of Forearm and Hand",
    "question": "A patient falls on an outstretched hand and sustains a fracture of the distal radius with dorsal displacement of the distal fragment. What is this fracture called?",
    "options": {
      "A": "Smith fracture",
      "B": "Colles fracture",
      "C": "Barton fracture",
      "D": "Galeazzi fracture"
    },
    "correct": "B",
    "explanation": "A Colles fracture is a distal radius fracture with dorsal displacement or angulation of the distal fragment, commonly following a fall on an outstretched hand."
  },
  {
    "id": 10,
    "tag": "Tag 2: Bones of Forearm and Hand",
    "question": "Which carpal bone is most directly associated with the hook that provides attachment for the flexor retinaculum?",
    "options": {
      "A": "Pisiform",
      "B": "Hamate",
      "C": "Scaphoid",
      "D": "Lunate"
    },
    "correct": "B",
    "explanation": "The hook of the hamate forms part of the medial attachment of the flexor retinaculum and contributes to the boundary of the carpal tunnel."
  },
  {
    "id": 11,
    "tag": "Tag 3: Fascia, Veins, Lymphatics and Innervation",
    "question": "Which superficial vein ascends along the lateral side of the upper limb and commonly drains into the axillary vein?",
    "options": {
      "A": "Basilic vein",
      "B": "Cephalic vein",
      "C": "Brachial vein",
      "D": "Median cubital vein"
    },
    "correct": "B",
    "explanation": "The cephalic vein ascends along the lateral side of the forearm and arm, passes through the deltopectoral groove and drains into the axillary vein."
  },
  {
    "id": 12,
    "tag": "Tag 3: Fascia, Veins, Lymphatics and Innervation",
    "question": "A patient sustains a lesion affecting the C8–T1 spinal nerve contributions to the lower trunk of the brachial plexus. Which cutaneous area is most likely to show sensory impairment?",
    "options": {
      "A": "Lateral shoulder",
      "B": "Medial forearm and hand",
      "C": "Posterior arm only",
      "D": "Lateral forearm only"
    },
    "correct": "B",
    "explanation": "The lower trunk receives contributions from C8 and T1. Its fibres contribute to sensory supply of the medial forearm and hand, particularly through the medial antebrachial cutaneous and ulnar nerves."
  },
  {
    "id": 13,
    "tag": "Tag 3: Fascia, Veins, Lymphatics and Innervation",
    "question": "Which deep fascia of the upper limb forms the roof of the cubital fossa and is reinforced by the bicipital aponeurosis?",
    "options": {
      "A": "Brachial fascia",
      "B": "Antebrachial fascia",
      "C": "Axillary fascia",
      "D": "Palmar aponeurosis"
    },
    "correct": "A",
    "explanation": "The brachial fascia continues into the forearm as antebrachial fascia. At the cubital fossa, the bicipital aponeurosis reinforces the deep fascia."
  },
  {
    "id": 14,
    "tag": "Tag 3: Fascia, Veins, Lymphatics and Innervation",
    "question": "A patient has a spinal nerve root lesion at C7. Which deep tendon reflex is most useful for assessing this root?",
    "options": {
      "A": "Biceps reflex",
      "B": "Brachioradialis reflex",
      "C": "Triceps reflex",
      "D": "Finger flexor reflex"
    },
    "correct": "C",
    "explanation": "The triceps reflex primarily assesses the C7 spinal nerve root, with contribution from C8. The biceps reflex is mainly C5–C6 and brachioradialis mainly C5–C6."
  },
  {
    "id": 15,
    "tag": "Tag 3: Fascia, Veins, Lymphatics and Innervation",
    "question": "Most lymph from the upper limb drains first into which group of axillary lymph nodes?",
    "options": {
      "A": "Pectoral group",
      "B": "Humeral group",
      "C": "Subscapular group",
      "D": "Apical group"
    },
    "correct": "B",
    "explanation": "The humeral or lateral group receives most lymphatic drainage from the upper limb before passing lymph towards the central and apical groups."
  },
  {
    "id": 16,
    "tag": "Tag 4: Pectoral and Scapular Muscles",
    "question": "Which muscle is primarily responsible for initiating the first 15 degrees of shoulder abduction?",
    "options": {
      "A": "Deltoid",
      "B": "Supraspinatus",
      "C": "Infraspinatus",
      "D": "Teres major"
    },
    "correct": "B",
    "explanation": "Supraspinatus initiates the first approximately 15 degrees of shoulder abduction. The deltoid becomes the major abductor thereafter."
  },
  {
    "id": 17,
    "tag": "Tag 4: Pectoral and Scapular Muscles",
    "question": "A patient develops difficulty performing the lift-off test, suggesting weakness of a muscle that medially rotates the humerus. Which muscle is most likely affected?",
    "options": {
      "A": "Teres minor",
      "B": "Subscapularis",
      "C": "Supraspinatus",
      "D": "Infraspinatus"
    },
    "correct": "B",
    "explanation": "The lift-off test assesses subscapularis, a rotator cuff muscle responsible for medial rotation of the humerus."
  },
  {
    "id": 18,
    "tag": "Tag 4: Pectoral and Scapular Muscles",
    "question": "Which muscle is responsible for upward rotation of the scapula during overhead abduction, working together with the trapezius?",
    "options": {
      "A": "Serratus anterior",
      "B": "Rhomboid major",
      "C": "Levator scapulae",
      "D": "Pectoralis minor"
    },
    "correct": "A",
    "explanation": "Serratus anterior works with the upper and lower fibres of trapezius to rotate the scapula upward, allowing full overhead elevation of the arm."
  },
  {
    "id": 19,
    "tag": "Tag 4: Pectoral and Scapular Muscles",
    "question": "A patient has difficulty climbing because of weakness in extending the humerus from a flexed position. Which muscle is most likely affected?",
    "options": {
      "A": "Pectoralis minor",
      "B": "Latissimus dorsi",
      "C": "Supraspinatus",
      "D": "Serratus anterior"
    },
    "correct": "B",
    "explanation": "Latissimus dorsi extends, adducts and medially rotates the humerus. It is particularly important during climbing and pulling movements."
  },
  {
    "id": 20,
    "tag": "Tag 4: Pectoral and Scapular Muscles",
    "question": "Which nerve supplies the rhomboid major and rhomboid minor muscles?",
    "options": {
      "A": "Long thoracic nerve",
      "B": "Dorsal scapular nerve",
      "C": "Accessory nerve",
      "D": "Suprascapular nerve"
    },
    "correct": "B",
    "explanation": "The dorsal scapular nerve, usually arising from C5, supplies the rhomboid muscles and commonly levator scapulae."
  },
  {
    "id": 21,
    "tag": "Tag 5: Axilla",
    "question": "Which artery is the only branch of the first part of the axillary artery?",
    "options": {
      "A": "Superior thoracic artery",
      "B": "Lateral thoracic artery",
      "C": "Subscapular artery",
      "D": "Thoracoacromial artery"
    },
    "correct": "A",
    "explanation": "The first part of the axillary artery gives off the superior thoracic artery."
  },
  {
    "id": 22,
    "tag": "Tag 5: Axilla",
    "question": "During axillary lymph node dissection, a nerve running along the medial wall of the axilla is injured. The patient subsequently develops medial winging of the scapula. Which nerve was damaged?",
    "options": {
      "A": "Thoracodorsal nerve",
      "B": "Long thoracic nerve",
      "C": "Axillary nerve",
      "D": "Medial pectoral nerve"
    },
    "correct": "B",
    "explanation": "The long thoracic nerve runs along the medial wall of the axilla and supplies serratus anterior. Injury causes medial scapular winging."
  },
  {
    "id": 23,
    "tag": "Tag 5: Axilla",
    "question": "Which artery passes through the triangular space to reach the posterior aspect of the scapula?",
    "options": {
      "A": "Posterior circumflex humeral artery",
      "B": "Anterior circumflex humeral artery",
      "C": "Circumflex scapular artery",
      "D": "Thoracodorsal artery"
    },
    "correct": "C",
    "explanation": "The circumflex scapular artery, a branch of the subscapular artery, passes through the triangular space and contributes to the scapular anastomosis."
  },
  {
    "id": 24,
    "tag": "Tag 5: Axilla",
    "question": "A surgeon ligates the axillary artery proximal to the origin of the subscapular artery. Which arterial network may provide collateral circulation to the scapular region?",
    "options": {
      "A": "Elbow anastomosis",
      "B": "Scapular anastomosis",
      "C": "Palmar arterial arch",
      "D": "Dorsal carpal arch"
    },
    "correct": "B",
    "explanation": "The scapular anastomosis connects branches of the subclavian artery with branches of the axillary artery, providing a collateral route around the scapula."
  },
  {
    "id": 25,
    "tag": "Tag 5: Axilla",
    "question": "Which group of axillary lymph nodes receives lymph from the posterior thoracic wall and scapular region?",
    "options": {
      "A": "Pectoral group",
      "B": "Humeral group",
      "C": "Subscapular group",
      "D": "Central group"
    },
    "correct": "C",
    "explanation": "The subscapular or posterior group receives lymph from the posterior thoracic wall and scapular region."
  },
  {
    "id": 26,
    "tag": "Tag 6: Brachial Plexus",
    "question": "Which roots form the upper trunk of the brachial plexus?",
    "options": {
      "A": "C5 and C6",
      "B": "C7 and C8",
      "C": "C8 and T1",
      "D": "C5 and C7"
    },
    "correct": "A",
    "explanation": "The upper trunk is formed by the union of the anterior rami of C5 and C6."
  },
  {
    "id": 27,
    "tag": "Tag 6: Brachial Plexus",
    "question": "A patient presents with a waiter's tip posture following traction injury to the neck. Which part of the brachial plexus is most likely affected?",
    "options": {
      "A": "Lower trunk",
      "B": "Upper trunk",
      "C": "Medial cord",
      "D": "Posterior cord"
    },
    "correct": "B",
    "explanation": "Erb-Duchenne palsy results from injury to the upper trunk, mainly C5–C6, producing weakness of shoulder abduction, lateral rotation and elbow flexion."
  },
  {
    "id": 28,
    "tag": "Tag 6: Brachial Plexus",
    "question": "Which terminal nerve of the brachial plexus receives contributions from all five roots?",
    "options": {
      "A": "Axillary nerve",
      "B": "Median nerve",
      "C": "Radial nerve",
      "D": "Musculocutaneous nerve"
    },
    "correct": "C",
    "explanation": "The radial nerve receives fibres from all five roots of the brachial plexus, C5–T1, through the posterior cord."
  },
  {
    "id": 29,
    "tag": "Tag 6: Brachial Plexus",
    "question": "A patient sustains an injury to the posterior cord of the brachial plexus. Which combination of nerves may be affected directly?",
    "options": {
      "A": "Radial and axillary nerves",
      "B": "Median and ulnar nerves",
      "C": "Musculocutaneous and median nerves",
      "D": "Ulnar and musculocutaneous nerves"
    },
    "correct": "A",
    "explanation": "The posterior cord gives rise to the radial and axillary nerves, as well as the upper and lower subscapular and thoracodorsal nerves."
  },
  {
    "id": 30,
    "tag": "Tag 6: Brachial Plexus",
    "question": "Which nerve arises directly from the roots of the brachial plexus?",
    "options": {
      "A": "Axillary nerve",
      "B": "Dorsal scapular nerve",
      "C": "Ulnar nerve",
      "D": "Median nerve"
    },
    "correct": "B",
    "explanation": "The dorsal scapular nerve usually arises directly from the C5 root of the brachial plexus."
  },
  {
    "id": 31,
    "tag": "Tag 7: Arm and Cubital Fossa",
    "question": "Which muscle forms the lateral boundary of the cubital fossa?",
    "options": {
      "A": "Pronator teres",
      "B": "Brachioradialis",
      "C": "Brachialis",
      "D": "Biceps brachii"
    },
    "correct": "B",
    "explanation": "Brachioradialis forms the lateral boundary of the cubital fossa, while pronator teres forms its medial boundary."
  },
  {
    "id": 32,
    "tag": "Tag 7: Arm and Cubital Fossa",
    "question": "A patient sustains a deep laceration in the cubital fossa. The median nerve and brachial artery are both injured. Which structure normally separates these structures from the superficial median cubital vein?",
    "options": {
      "A": "Bicipital aponeurosis",
      "B": "Palmar aponeurosis",
      "C": "Flexor retinaculum",
      "D": "Interosseous membrane"
    },
    "correct": "A",
    "explanation": "The bicipital aponeurosis passes medially from the biceps tendon and covers the brachial artery and median nerve, helping protect them from superficial injury."
  },
  {
    "id": 33,
    "tag": "Tag 7: Arm and Cubital Fossa",
    "question": "Which nerve pierces the coracobrachialis muscle and continues between biceps brachii and brachialis?",
    "options": {
      "A": "Median nerve",
      "B": "Musculocutaneous nerve",
      "C": "Radial nerve",
      "D": "Ulnar nerve"
    },
    "correct": "B",
    "explanation": "The musculocutaneous nerve pierces coracobrachialis and descends between biceps and brachialis, supplying the anterior compartment muscles."
  },
  {
    "id": 34,
    "tag": "Tag 7: Arm and Cubital Fossa",
    "question": "A patient sustains a midshaft fracture of the humerus. Which nerve is most vulnerable because of its close relationship to the radial groove?",
    "options": {
      "A": "Ulnar nerve",
      "B": "Median nerve",
      "C": "Radial nerve",
      "D": "Musculocutaneous nerve"
    },
    "correct": "C",
    "explanation": "The radial nerve travels in the radial groove of the humerus with the profunda brachii artery and may be injured in a midshaft humeral fracture."
  },
  {
    "id": 35,
    "tag": "Tag 7: Arm and Cubital Fossa",
    "question": "Which structure is located most medially in the typical arrangement of the major contents of the cubital fossa from lateral to medial?",
    "options": {
      "A": "Biceps tendon",
      "B": "Brachial artery",
      "C": "Median nerve",
      "D": "Radial nerve"
    },
    "correct": "C",
    "explanation": "The typical arrangement from lateral to medial is tendon, artery, nerve (TAN), with the radial nerve lying more laterally."
  },
  {
    "id": 36,
    "tag": "Tag 8: Forearm Compartments and Muscles",
    "question": "Which muscle is the most powerful pronator of the forearm, particularly when the movement is performed against resistance?",
    "options": {
      "A": "Pronator teres",
      "B": "Pronator quadratus",
      "C": "Brachioradialis",
      "D": "Supinator"
    },
    "correct": "B",
    "explanation": "Pronator quadratus is the chief pronator of the forearm and is particularly important in sustained or resisted pronation."
  },
  {
    "id": 37,
    "tag": "Tag 8: Forearm Compartments and Muscles",
    "question": "A patient is unable to flex the distal interphalangeal joint of the index finger. Which muscle is most likely paralysed?",
    "options": {
      "A": "Flexor digitorum superficialis",
      "B": "Flexor digitorum profundus",
      "C": "Lumbrical one",
      "D": "Palmar interosseous"
    },
    "correct": "B",
    "explanation": "Flexor digitorum profundus inserts into the bases of the distal phalanges and is responsible for flexion at the distal interphalangeal joints."
  },
  {
    "id": 38,
    "tag": "Tag 8: Forearm Compartments and Muscles",
    "question": "Which muscle is responsible for flexion and ulnar deviation of the wrist?",
    "options": {
      "A": "Flexor carpi radialis",
      "B": "Flexor carpi ulnaris",
      "C": "Palmaris longus",
      "D": "Extensor carpi ulnaris"
    },
    "correct": "B",
    "explanation": "Flexor carpi ulnaris flexes and adducts the wrist. It is supplied by the ulnar nerve."
  },
  {
    "id": 39,
    "tag": "Tag 8: Forearm Compartments and Muscles",
    "question": "A patient presents with weakness of wrist extension and inability to extend the metacarpophalangeal joints following a deep injury to the posterior forearm. Which nerve is most likely affected?",
    "options": {
      "A": "Median nerve",
      "B": "Ulnar nerve",
      "C": "Posterior interosseous nerve",
      "D": "Medial antebrachial cutaneous nerve"
    },
    "correct": "C",
    "explanation": "The posterior interosseous nerve supplies most of the extensor muscles of the forearm. Injury causes weakness of finger and wrist extension."
  },
  {
    "id": 40,
    "tag": "Tag 8: Forearm Compartments and Muscles",
    "question": "Which muscle forms the floor of the anatomical snuffbox?",
    "options": {
      "A": "Pronator quadratus",
      "B": "Scaphoid and trapezium",
      "C": "Supinator",
      "D": "Pisiform"
    },
    "correct": "B",
    "explanation": "The scaphoid and trapezium bones form the floor of the anatomical snuffbox, which also contains the radial artery."
  },
  {
    "id": 41,
    "tag": "Tag 9: Forearm Vessels and Nerves",
    "question": "Which artery gives rise to the common interosseous artery?",
    "options": {
      "A": "Radial artery",
      "B": "Ulnar artery",
      "C": "Brachial artery",
      "D": "Axillary artery"
    },
    "correct": "B",
    "explanation": "The common interosseous artery is a branch of the ulnar artery and divides into anterior and posterior interosseous arteries."
  },
  {
    "id": 42,
    "tag": "Tag 9: Forearm Vessels and Nerves",
    "question": "A patient has a deep laceration in the proximal anterior forearm. The injury damages a nerve that supplies pronator teres, flexor carpi radialis and palmaris longus. Which nerve is involved?",
    "options": {
      "A": "Ulnar nerve",
      "B": "Median nerve",
      "C": "Radial nerve",
      "D": "Axillary nerve"
    },
    "correct": "B",
    "explanation": "The median nerve supplies most of the anterior forearm muscles, including pronator teres, flexor carpi radialis and palmaris longus."
  },
  {
    "id": 43,
    "tag": "Tag 9: Forearm Vessels and Nerves",
    "question": "Which artery is palpated at the lateral side of the wrist, just lateral to the tendon of flexor carpi radialis?",
    "options": {
      "A": "Ulnar artery",
      "B": "Radial artery",
      "C": "Anterior interosseous artery",
      "D": "Posterior interosseous artery"
    },
    "correct": "B",
    "explanation": "The radial artery is palpated at the lateral wrist, lateral to the flexor carpi radialis tendon."
  },
  {
    "id": 44,
    "tag": "Tag 9: Forearm Vessels and Nerves",
    "question": "A patient presents with loss of sensation over the palmar surface of the lateral three and a half digits, including their distal dorsal surfaces. Which nerve is most likely affected?",
    "options": {
      "A": "Ulnar nerve",
      "B": "Median nerve",
      "C": "Superficial radial nerve",
      "D": "Posterior interosseous nerve"
    },
    "correct": "B",
    "explanation": "The median nerve supplies the palmar surface of the lateral three and a half digits and their distal dorsal surfaces through its digital branches."
  },
  {
    "id": 45,
    "tag": "Tag 10: Hand Fascia, Muscles and Tendons",
    "question": "Which muscle is responsible for opposition of the thumb?",
    "options": {
      "A": "Adductor pollicis",
      "B": "Opponens pollicis",
      "C": "Flexor pollicis brevis",
      "D": "Abductor pollicis longus"
    },
    "correct": "B",
    "explanation": "Opponens pollicis rotates and draws the first metacarpal across the palm, enabling opposition of the thumb."
  },
  {
    "id": 46,
    "tag": "Tag 10: Hand Fascia, Muscles and Tendons",
    "question": "A patient has difficulty abducting the fingers away from the middle finger. Which group of intrinsic hand muscles is most likely affected?",
    "options": {
      "A": "Palmar interossei",
      "B": "Dorsal interossei",
      "C": "Lumbricals",
      "D": "Thenar muscles"
    },
    "correct": "B",
    "explanation": "Dorsal interossei abduct the fingers at the metacarpophalangeal joints, remembered by DAB: Dorsal ABduct."
  },
  {
    "id": 47,
    "tag": "Tag 10: Hand Fascia, Muscles and Tendons",
    "question": "Which structure forms the roof of the carpal tunnel?",
    "options": {
      "A": "Flexor retinaculum",
      "B": "Extensor retinaculum",
      "C": "Palmar aponeurosis",
      "D": "Interosseous membrane"
    },
    "correct": "A",
    "explanation": "The flexor retinaculum forms the roof of the carpal tunnel and holds the flexor tendons in position."
  },
  {
    "id": 48,
    "tag": "Tag 10: Hand Fascia, Muscles and Tendons",
    "question": "A patient presents with trigger finger due to thickening of a digital fibrous tendon sheath. Which normal function of the sheath has been compromised?",
    "options": {
      "A": "Prevention of tendon friction and bowstringing",
      "B": "Production of synovial fluid in the wrist joint",
      "C": "Extension of the metacarpophalangeal joints",
      "D": "Stabilisation of the distal radioulnar joint"
    },
    "correct": "A",
    "explanation": "The fibrous digital sheaths hold flexor tendons close to the phalanges, preventing bowstringing and helping guide tendon movement. Thickening can obstruct smooth tendon gliding."
  },
  {
    "id": 49,
    "tag": "Tag 11: Hand Vessels and Nerves",
    "question": "Which artery primarily forms the superficial palmar arch?",
    "options": {
      "A": "Ulnar artery",
      "B": "Radial artery",
      "C": "Anterior interosseous artery",
      "D": "Posterior interosseous artery"
    },
    "correct": "A",
    "explanation": "The superficial palmar arch is formed mainly by the ulnar artery, usually completed by a superficial branch of the radial artery."
  },
  {
    "id": 50,
    "tag": "Tag 11: Hand Vessels and Nerves",
    "question": "A patient sustains a laceration at the wrist and develops weakness of the interossei and loss of sensation over the medial one and a half digits. Which nerve is most likely injured?",
    "options": {
      "A": "Median nerve",
      "B": "Ulnar nerve",
      "C": "Radial nerve",
      "D": "Musculocutaneous nerve"
    },
    "correct": "B",
    "explanation": "The ulnar nerve supplies the interossei and provides sensation to the medial one and a half digits. Its injury can cause both sensory and intrinsic motor deficits."
  },
  {
    "id": 51,
    "tag": "Tag 11: Hand Vessels and Nerves",
    "question": "Which artery forms the main contribution to the deep palmar arch?",
    "options": {
      "A": "Radial artery",
      "B": "Ulnar artery",
      "C": "Brachial artery",
      "D": "Anterior interosseous artery"
    },
    "correct": "A",
    "explanation": "The deep palmar arch is formed mainly by the radial artery and is usually completed by the deep branch of the ulnar artery."
  },
  {
    "id": 52,
    "tag": "Tag 11: Hand Vessels and Nerves",
    "question": "A patient has a lesion of the recurrent motor branch of the median nerve in the palm. Which function is most likely impaired?",
    "options": {
      "A": "Abduction of the little finger",
      "B": "Opposition of the thumb",
      "C": "Adduction of the fingers",
      "D": "Extension of the thumb at the interphalangeal joint"
    },
    "correct": "B",
    "explanation": "The recurrent branch of the median nerve supplies key thenar muscles, including opponens pollicis. Its injury causes weakness or loss of thumb opposition."
  },
  {
    "id": 53,
    "tag": "Tag 12: Shoulder Joints",
    "question": "Which type of synovial joint is the glenohumeral joint?",
    "options": {
      "A": "Plane joint",
      "B": "Hinge joint",
      "C": "Saddle joint",
      "D": "Ball-and-socket joint"
    },
    "correct": "D",
    "explanation": "The glenohumeral joint is a multiaxial ball-and-socket synovial joint, allowing movement in multiple planes."
  },
  {
    "id": 54,
    "tag": "Tag 12: Shoulder Joints",
    "question": "A patient sustains an anterior dislocation of the glenohumeral joint. Which structure is most vulnerable because of its close relationship to the inferior aspect of the joint capsule?",
    "options": {
      "A": "Axillary nerve",
      "B": "Musculocutaneous nerve",
      "C": "Median nerve",
      "D": "Ulnar nerve"
    },
    "correct": "A",
    "explanation": "The axillary nerve passes inferior to the glenohumeral joint capsule and may be injured during anterior-inferior shoulder dislocation."
  },
  {
    "id": 55,
    "tag": "Tag 12: Shoulder Joints",
    "question": "Which ligament strengthens the superior aspect of the acromioclavicular joint capsule?",
    "options": {
      "A": "Coracoclavicular ligament",
      "B": "Acromioclavicular ligament",
      "C": "Coracoacromial ligament",
      "D": "Transverse humeral ligament"
    },
    "correct": "B",
    "explanation": "The acromioclavicular ligament is a local thickening of the joint capsule and strengthens the acromioclavicular joint superiorly. The coracoclavicular ligament provides major additional stability."
  },
  {
    "id": 56,
    "tag": "Tag 12: Shoulder Joints",
    "question": "Which ligament is the major suspensory support preventing the scapula and upper limb from dropping away from the clavicle at the acromioclavicular joint?",
    "options": {
      "A": "Coracoacromial ligament",
      "B": "Coracoclavicular ligament",
      "C": "Transverse scapular ligament",
      "D": "Glenohumeral ligament"
    },
    "correct": "B",
    "explanation": "The coracoclavicular ligament, consisting of conoid and trapezoid parts, strongly anchors the clavicle to the coracoid process and stabilises the acromioclavicular joint."
  },
  {
    "id": 57,
    "tag": "Tag 13: Elbow, Wrist and Hand Joints",
    "question": "Which type of synovial joint is the proximal radioulnar joint?",
    "options": {
      "A": "Plane",
      "B": "Pivot",
      "C": "Hinge",
      "D": "Saddle"
    },
    "correct": "B",
    "explanation": "The proximal radioulnar joint is a pivot synovial joint that permits rotation of the radius around the ulna during pronation and supination."
  },
  {
    "id": 58,
    "tag": "Tag 13: Elbow, Wrist and Hand Joints",
    "question": "A patient sustains a fracture near the distal radius and develops instability of the distal radioulnar joint. Which structure is the primary stabilising component of this joint?",
    "options": {
      "A": "Triangular fibrocartilage complex",
      "B": "Palmar radiocarpal ligament",
      "C": "Annular ligament",
      "D": "Scapholunate ligament"
    },
    "correct": "A",
    "explanation": "The triangular fibrocartilage complex, particularly its articular disc and radioulnar ligaments, is a major stabiliser of the distal radioulnar joint."
  },
  {
    "id": 59,
    "tag": "Tag 13: Elbow, Wrist and Hand Joints",
    "question": "Which type of synovial joint is formed between the metacarpal heads and the proximal phalanges?",
    "options": {
      "A": "Plane joint",
      "B": "Hinge joint",
      "C": "Condyloid joint",
      "D": "Pivot joint"
    },
    "correct": "C",
    "explanation": "The metacarpophalangeal joints are condyloid synovial joints, allowing flexion, extension, abduction, adduction and circumduction."
  },
  {
    "id": 60,
    "tag": "Tag 13: Elbow, Wrist and Hand Joints",
    "question": "A patient has difficulty performing opposition of the thumb after an injury involving the first carpometacarpal joint. Which anatomical feature of this joint allows the wide range of thumb movement?",
    "options": {
      "A": "Its hinge-shaped articular surfaces",
      "B": "Its saddle-shaped articular surfaces",
      "C": "Its pivot arrangement",
      "D": "Its absence of a joint capsule"
    },
    "correct": "B",
    "explanation": "The first carpometacarpal joint is a saddle-shaped synovial joint between the trapezium and first metacarpal. Its articular shape permits flexion, extension, abduction, adduction and opposition."
  }
];
