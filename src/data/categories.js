/**
 * Category landing pages, carried over from the old site's category pages
 * (furniconcepts.com/acoustic-pods.php, /office-furniture.php, ...) and served
 * at the same URLs. Category.jsx renders any entry: each page is a hero, an
 * optional row of key numbers, then `sections` — lists of content blocks
 * (heading, hook, intro, cards, table, panel, checklist, tags, links,
 * badges, gallery, buttons, faq, stats, columns, text) — and a closing call to action.
 *
 * Rich text is either a string or a list of strings and {label, href} links.
 *
 * A page with a `parent` (e.g. the Dubai / India / Singapore umbrella pages)
 * sits under that category: it is routed, but left out of the menus. Head
 * tags for every page live in data/seo.json (see lib/seo.js).
 * An optional `card` replaces `hero` on the category cards (home page and
 * /categories) where the banner doesn't suit a tall card.
 */
export const CATEGORY_PAGES = [
  {
    "path": "/acoustic-pods.php",
    "name": "Acoustic Pods",
    "hero": "/images/projects/al-futtaim-ho-phone-booth/banner.webp",
    "title": "Acoustic Pods & Sound Solutions Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Acoustic Pods & Solutions",
    "summary": "Musepod and Zumbooth acoustic pods, phone booths and panels, supplied across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "Up to 30dB",
        "label": "Noise reduction with Musepod"
      },
      {
        "value": "GREENGUARD",
        "label": "Certified indoor air quality with Zumbooth"
      },
      {
        "value": "Pods + Panels",
        "label": "Private booths and whole-floor noise control"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "Open-plan offices are great until someone takes a call next to you. Give your team a quiet place to think, talk and focus."
        },
        {
          "type": "intro",
          "text": [
            "We're the regional distributor for ",
            {
              "label": "Musepod",
              "href": "/brands/musepod"
            },
            " and ",
            {
              "label": "Zumbooth",
              "href": "/brands/zumbooth"
            },
            ", two pod makers with very different strengths, plus acoustic panels for the wider floor."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Pods, Booths & Panels"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Musepod",
              "body": [
                "Focus pods for one, meeting pods for small groups, and larger collaboration spaces. Cuts noise by up to 30dB, is made with recycled and FSC-certified materials, and can be finished to match your office."
              ],
              "link": {
                "label": "Explore Musepod",
                "href": "/brands/musepod"
              }
            },
            {
              "title": "Zumbooth",
              "body": [
                "Smart booths that switch lighting and ventilation on when someone steps in. Over 90% recycled materials, GREENGUARD certified for indoor air quality, an aluminium frame, occupancy lights, 200+ colour options and a 2-year warranty."
              ],
              "link": {
                "label": "Explore Zumbooth",
                "href": "/brands/zumbooth"
              }
            },
            {
              "title": "Acoustic Panels & Ceilings",
              "body": [
                "Wall and ceiling treatments that calm the noise across a whole floor, no booth required."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Musepod",
              "href": "/brands/musepod"
            },
            {
              "label": "Zumbooth",
              "href": "/brands/zumbooth"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: Al Futtaim HO Phone Booth",
          "body": [
            "Office phone booths supplied and installed by Furniconcepts."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/al-futtaim-ho-phone-booth/01.webp",
            "/images/projects/al-futtaim-ho-phone-booth/02.webp",
            "/images/projects/al-futtaim-ho-phone-booth/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/al-futtaim-ho-phone-booth"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Musepod or Zumbooth?",
              "a": "Musepod leads on sustainable materials and flexible sizes. Zumbooth leads on smart sensors and certified air quality."
            },
            {
              "q": "How much noise do pods block?",
              "a": "Musepod blocks up to 30dB."
            },
            {
              "q": "Are they eco-certified?",
              "a": "Yes. Zumbooth is GREENGUARD certified, and Musepod uses FSC-certified boards."
            },
            {
              "q": "Pod or panel?",
              "a": "A pod gives full privacy. Panels reduce noise across the room at a lower cost."
            },
            {
              "q": "Do pods have ventilation?",
              "a": "Zumbooth has sensor-controlled ventilation."
            },
            {
              "q": "How many pods does an office need?",
              "a": "It depends on headcount and how often people take calls. We'll help you size it."
            },
            {
              "q": "Can pods be moved later?",
              "a": "Musepod's modular design allows reconfiguration."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Your team needs somewhere to hear themselves think.",
      "body": [
        "Let's find the right pod."
      ],
      "buttons": [
        {
          "label": "Find Your Team's Quiet Space",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/acoustic-solutions.php",
    "name": "Acoustic Solutions",
    "hero": "/images/projects/al-futtaim-ho-phone-booth/06.webp",
    "title": "Acoustic Solutions: Silent Pods, Office Phone Booths & Acoustic Panels",
    "eyebrow": "Workspace Acoustics",
    "summary": "Open-plan offices need quiet spaces. Furniconcepts supplies silent pods, phone booths and acoustic wall and ceiling panels for offices, schools and commercial spaces across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "3 Regions",
        "label": "UAE, India, and Singapore project support"
      },
      {
        "value": "Pods + Panels",
        "label": "Privacy enclosures and broader sound-control systems"
      },
      {
        "value": "End-to-End",
        "label": "Planning, product selection, supply, and execution support"
      }
    ],
    "sections": [
      [
        {
          "type": "heading",
          "title": "FAQs",
          "body": [
            "Quick answers to common questions about acoustic pods, phone booths, and panel systems."
          ]
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "What is an acoustic pod?",
              "a": "An acoustic pod is a sound-insulated enclosure used for focused work, calls, or meetings inside larger shared spaces."
            },
            {
              "q": "Are office phone booths soundproof?",
              "a": "Office phone booths reduce external noise significantly and improve privacy, though performance depends on the booth design and acoustic specification."
            },
            {
              "q": "What is the cost of acoustic pods in Dubai?",
              "a": "Pricing depends on the pod's size, finish and features. Contact us for a quotation for your project."
            },
            {
              "q": "Do acoustic panels reduce noise?",
              "a": "Yes, acoustic panels reduce echo and improve sound quality, but they do not provide the same enclosed privacy as pods or booths."
            },
            {
              "q": "Which is better: pods or panels?",
              "a": "Pods are better for privacy and enclosed work, while panels are better for broader ambient noise control and speech clarity."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Request Acoustic Consultation Today",
      "body": [
        "Get customized acoustic solutions to fit your workspace needs, whether you need silent pods, office phone booths, acoustic wall panels, or ceiling systems."
      ],
      "buttons": [
        {
          "label": "Contact Us",
          "href": "/contact"
        },
        {
          "label": "Explore Silent Pods Supplier Dubai Solutions",
          "href": "/acoustic-pods-vs-phone-booths.php"
        }
      ]
    }
  },
  {
    "path": "/airport-seating.php",
    "name": "Airport Seating",
    "hero": "/images/categories/airport-seating-hero.webp",
    "card": "/images/categories/airport-seating-card.webp",
    "title": "Airport Seating",
    "eyebrow": "Airport Seating",
    "summary": "Choose your region to explore airport seating supplier pages for Dubai, India, and Singapore.",
    "sections": [
      [
        {
          "type": "heading",
          "title": "Choose Your Region"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Dubai",
              "body": [
                "Explore airport seating solutions for Dubai terminals, lounges, waiting areas, hospitals, and public infrastructure projects."
              ],
              "link": {
                "label": "View Dubai",
                "href": "/airport-seating-manufacturer-dubai.php"
              }
            },
            {
              "title": "India",
              "body": [
                "See airport seating supplier options built for Indian terminals, lounges, waiting zones, hospitals, and commercial public spaces."
              ],
              "link": {
                "label": "View India",
                "href": "/airport-seating-supplier-india.php"
              }
            },
            {
              "title": "Singapore",
              "body": [
                "Browse premium airport seating content tailored for Singapore terminals, waiting areas, lounges, hospitals, and institutional spaces."
              ],
              "link": {
                "label": "View Singapore",
                "href": "/airport-seating-supplier-singapore.php"
              }
            }
          ]
        }
      ]
    ]
  },
  {
    "path": "/auditorium-seating.php",
    "name": "Auditorium Seating",
    "hero": "/images/projects/etisalat-hq-auditorium/banner.webp",
    "card": "/images/categories/auditorium-seating-card.webp",
    "title": "Auditorium Seating Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Auditorium Seating",
    "summary": "Fixed, retractable and VIP auditorium seating from Leadcom and Audia Italia, with layout planning and installation across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "7 Days",
        "label": "Delivery from Dubai warehouse stock"
      },
      {
        "value": "Up to 50 Rows",
        "label": "Folded flat by Leadcom retractable systems"
      },
      {
        "value": "3D Planned",
        "label": "Layout planning, BIFMA-standard build and on-site installation"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "A three-hour conference is long. A three-hour conference in a bad seat feels endless. We make sure your audience remembers the talk, not the chair."
        },
        {
          "type": "intro",
          "text": [
            "As the regional distributor for ",
            {
              "label": "Leadcom",
              "href": "/brands/leadcom"
            },
            " and ",
            {
              "label": "Audia Italia",
              "href": "/brands/audia-italia"
            },
            ", we supply and install fixed, retractable and custom auditorium seating across Dubai, India and Singapore. We plan the layout in 3D, build to BIFMA standards and handle installation ourselves."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Auditorium Seating Types"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Fixed Auditorium Seating",
              "body": [
                "Built for dedicated halls. A 22-inch seat pitch fits the most seats your space legally allows, curved backs support the lower back through long sessions, and the cushioning keeps its shape after 100,000 compressions. Aisle seats come with wider armrests for easy entry."
              ]
            },
            {
              "title": "Retractable (Telescopic) Seating",
              "body": [
                "Need the hall for a conference today and an exhibition tomorrow? Leadcom's motorised systems fold up to 50 rows flat against the wall at the press of a button. Safety sensors, a manual backup and a 5-year mechanism warranty come standard. We pre-assemble seat banks off-site, cutting installation time by around 40%, and keep stock in Dubai for 7-day delivery."
              ]
            },
            {
              "title": "Custom / VIP Theatre Seating (Audia Italia)",
              "body": [
                "Italian-made seating tailored to your venue: finishes, sizes, armrests and upholstery. You'll see the full layout in 3D before anything goes into production."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Leadcom",
              "href": "/brands/leadcom"
            },
            {
              "label": "Audia Italia",
              "href": "/brands/audia-italia"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: Etisalat HQ Auditorium",
          "body": [
            "VIP auditorium seating from Audia Italia, supplied and installed by Furniconcepts in Dubai."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/etisalat-hq-auditorium/01.webp",
            "/images/projects/etisalat-hq-auditorium/02.webp",
            "/images/projects/etisalat-hq-auditorium/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/etisalat-hq-auditorium"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Fixed or retractable, which do I need?",
              "a": "Fixed seating gives you maximum capacity and durability. Retractable seating lets one room do many jobs, with a more involved installation."
            },
            {
              "q": "What is telescopic seating?",
              "a": "Seating mounted on platforms that fold and stack against a wall, turning a seated hall into open floor space."
            },
            {
              "q": "What seat pitch do you use?",
              "a": "22 inches centre to centre, to get the most seats within legal spacing."
            },
            {
              "q": "How long does it take?",
              "a": "Retractable systems take 40–45 days, or 15–18 days for premium UAE projects."
            },
            {
              "q": "Can you supply seating for an opening date?",
              "a": "Yes. Dubai warehouse stock supports 7-day delivery."
            },
            {
              "q": "Is installation included?",
              "a": "Yes. We handle 3D planning, manufacturing, delivery and on-site installation."
            },
            {
              "q": "Can seating be customised?",
              "a": "Yes. Audia Italia is fully tailored per venue, and Leadcom offers tablet arms, continental layouts and reinforced backs."
            },
            {
              "q": "Do you work outside the UAE?",
              "a": "Yes, across Dubai, India and Singapore."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Planning a hall?",
      "body": [
        "Let's map out every seat together."
      ],
      "buttons": [
        {
          "label": "Plan Your Auditorium",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/hotel-furniture-manufacturers.php",
    "name": "Hotel Furniture",
    "hero": "/images/projects/le-royal-meridian/banner.webp",
    "title": "Hotel & Hospitality Furniture Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Hospitality Furniture",
    "summary": "Hotel, restaurant and café furniture from SCAB Italy and Worklyffe, plus outdoor umbrellas, across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "Lobby to Poolside",
        "label": "Indoor and outdoor spaces planned together"
      },
      {
        "value": "SCAB Italy",
        "label": "Designer lounge seating for lobbies and lounges"
      },
      {
        "value": "Hotel + Cruise",
        "label": "Commercial-grade and marine-grade furniture"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "Guests judge a hotel within seconds of walking in. Make sure the lobby, the lounge and the poolside all say the right thing."
        },
        {
          "type": "intro",
          "text": [
            "We furnish hotels, resorts and restaurants across Dubai, India and Singapore, with ",
            {
              "label": "SCAB Italy",
              "href": "/brands/scab-italy"
            },
            " for designer lounge seating and ",
            {
              "label": "Worklyffe",
              "href": "/brands/worklyffe"
            },
            " for lobby and café furniture."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "What We Offer"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Lounge & Lobby Seating",
              "body": [
                "Designer lounge seating from SCAB Italy for lobbies, lounges and waiting areas."
              ],
              "link": {
                "label": "See Lounge Seating",
                "href": "/lounge-seating.php"
              }
            },
            {
              "title": "Guest & Public-Area Furniture",
              "body": [
                "Pieces that reflect your brand, keep guests comfortable, make the most of your space and hold up to heavy footfall."
              ]
            },
            {
              "title": "Outdoor & Poolside Umbrellas",
              "body": [
                "Shade systems for pools and terraces. The Marlin Custom Umbrella features 360° rotation and a concealed-rib, accordion-fold canopy."
              ],
              "link": {
                "label": "See Outdoor & Indoor Umbrellas",
                "href": "/outdoor-indoor-umbrella-supplier.php"
              }
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "SCAB Italy",
              "href": "/brands/scab-italy"
            },
            {
              "label": "Worklyffe",
              "href": "/brands/worklyffe"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: Le Royal Méridien",
          "body": [
            "Hospitality furniture supplied and installed by Furniconcepts."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/le-royal-meridian/01.webp",
            "/images/projects/le-royal-meridian/02.webp",
            "/images/projects/le-royal-meridian/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/le-royal-meridian"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Which brands do you supply?",
              "a": "SCAB Italy and Worklyffe."
            },
            {
              "q": "Can you furnish a whole hotel?",
              "a": "Yes, from lobby to poolside."
            },
            {
              "q": "Do you furnish outdoor and pool areas?",
              "a": "Yes, including umbrella systems."
            },
            {
              "q": "Do you supply restaurants?",
              "a": "Yes, restaurants and bars are part of our hospitality work."
            },
            {
              "q": "Is hotel furniture different from cruise furniture?",
              "a": "Yes. Cruise furniture needs marine-grade steel, IMO/SOLAS compliance and salt-resistant finishes. We supply both."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Want guests to feel at home from the moment they arrive?",
      "body": [
        "Let's design it."
      ],
      "buttons": [
        {
          "label": "Elevate Your Guest Spaces",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/hospital-furniture.php",
    "name": "Hospital Furniture",
    "hero": "/images/categories/hospital-furniture-hero.webp",
    "card": "/images/categories/hospital-furniture-card.webp",
    "title": "Healthcare & Hospital Furniture Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Healthcare Furniture",
    "summary": "Award-winning Nitrocare hospital beds, ICU beds, stretchers and exam chairs, supplied across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "60,000m²",
        "label": "Nitrocare production facility"
      },
      {
        "value": "7 Design Awards",
        "label": "Including Red Dot, German Design and iF"
      },
      {
        "value": "Home to ICU",
        "label": "Beds, stretchers, exam chairs and lab furniture"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "In a hospital, every second and every movement counts. Your furniture should help your staff, not slow them down."
        },
        {
          "type": "intro",
          "text": [
            "We're the regional distributor for ",
            {
              "label": "Nitrocare",
              "href": "/brands/nitrocare"
            },
            ", an award-winning medical furniture maker with a 60,000m² production facility. We supply hospital beds, stretchers, ICU furniture and exam chairs across Dubai, India and Singapore."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Hospital Beds & Other Products"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Hospital Beds",
              "body": [
                "From home care to ICU. The NITRO HB 7240 is a four-motor home care bed, and the NITRO HB 8140 is a height-adjustable ICU bed. Features include Trendelenburg positioning, CPR quick-release and an 18cm X-ray extension so patients can be imaged without being moved."
              ]
            },
            {
              "title": "Stretchers & Trolleys",
              "body": [
                "Fast, safe patient movement, built to the same standard as our beds."
              ]
            },
            {
              "title": "Exam Chairs",
              "body": [
                "Easy access for doctors, comfort for patients."
              ]
            },
            {
              "title": "Laboratory Furniture",
              "body": [
                "Built to meet healthcare, school and industrial regulations."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Nitrocare Awards"
        },
        {
          "type": "badges",
          "items": [
            "Red Dot",
            "German Design Award",
            "iF Design Award",
            "Good Design Award",
            "Good Industrial Design",
            "International Design Award",
            "Product Design Award"
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brand"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Nitrocare",
              "href": "/brands/nitrocare"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: HealthHub",
          "body": [
            "Healthcare furniture supplied and installed by Furniconcepts."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/healthhub/01.webp",
            "/images/projects/healthhub/02.webp",
            "/images/projects/healthhub/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/healthhub"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "What do you supply?",
              "a": "Hospital beds, stretchers, trolleys, ICU furniture and exam chairs."
            },
            {
              "q": "What awards has Nitrocare won?",
              "a": "Red Dot, German Design Award, iF Design Award, Good Design Award and more."
            },
            {
              "q": "Do you have ICU beds?",
              "a": "Yes, the NITRO HB 8140."
            },
            {
              "q": "What is a Trendelenburg bed?",
              "a": "A bed that tilts head-down, used during certain procedures and emergencies."
            },
            {
              "q": "Is home care furniture available?",
              "a": "Yes, the NITRO HB 7240."
            },
            {
              "q": "Can you furnish a clinic, not just a hospital?",
              "a": "Yes, including exam chairs and lighter-acuity furniture."
            },
            {
              "q": "Do you supply lab furniture?",
              "a": "Yes."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Equipping a ward or a whole facility?",
      "body": [
        "Let's talk about what your staff need."
      ],
      "buttons": [
        {
          "label": "Equip Your Facility With Nitrocare",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/lounge-seating.php",
    "name": "Lounge Seating",
    "hero": "/images/projects/etisalat-hq/banner.webp",
    "card": "/images/categories/lounge-seating-card.webp",
    "title": "Lounge Seating Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Lounge Seating",
    "summary": "Lounge chairs, modular sofas and collaborative seating from SCAB Italy and Worklyffe, across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "SCAB Italy",
        "label": "Designer lounge seating built from tough materials"
      },
      {
        "value": "Sofa Vortex",
        "label": "Curved, modular sofa for receptions and lounges"
      },
      {
        "value": "Lobby to Café",
        "label": "Hotels, offices, coworking spaces and cafés"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "The best conversations rarely happen at a desk. Give people a lounge worth lingering in."
        },
        {
          "type": "intro",
          "text": [
            "Lounge chairs, modular sofas and collaborative seating for hotel lobbies, offices, coworking spaces and cafés across Dubai, India and Singapore, from ",
            {
              "label": "SCAB Italy",
              "href": "/brands/scab-italy"
            },
            " and ",
            {
              "label": "Worklyffe",
              "href": "/brands/worklyffe"
            },
            "."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "What We Offer"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Designer Lounge Seating",
              "body": [
                "SCAB Italy's collection combines innovative moulding with tough materials, so the same piece works in a hotel lobby or an office breakout area."
              ],
              "link": {
                "label": "Explore SCAB Italy",
                "href": "/brands/scab-italy"
              }
            },
            {
              "title": "Modular Sofas",
              "body": [
                "The curved Sofa Vortex rearranges to fit any reception or lounge. Worklyffe adds furniture for lobbies and cafés."
              ],
              "link": {
                "label": "Explore Worklyffe",
                "href": "/brands/worklyffe"
              }
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "SCAB Italy",
              "href": "/brands/scab-italy"
            },
            {
              "label": "Worklyffe",
              "href": "/brands/worklyffe"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Which brands do you use?",
              "a": "SCAB Italy and Worklyffe."
            },
            {
              "q": "Is lounge seating just for hotels?",
              "a": "No. It works just as well in offices, coworking spaces and cafés."
            },
            {
              "q": "Can lounge seating work in an office?",
              "a": "Yes, especially in breakout and reception areas."
            },
            {
              "q": "Do you supply modular sofas?",
              "a": "Yes, including the Sofa Vortex."
            },
            {
              "q": "Is modular seating better?",
              "a": "It's easier to rearrange as your needs change."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Turn your lobby into a place people want to be.",
      "body": [],
      "buttons": [
        {
          "label": "Design Your Lounge Space",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/office-furniture.php",
    "name": "Office Furniture",
    "hero": "/images/projects/cushman/banner.webp",
    "title": "Office & Workplace Furniture Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Office & Workplace Furniture",
    "summary": "Desks, ergonomic chairs, meeting furniture and storage from Gebbwork, Cavaletti, Forma5 and more, across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "10+ Brands",
        "label": "Desks, seating, storage and accessories under one roof"
      },
      {
        "value": "Startup to HQ",
        "label": "From a single desk to a full headquarters fit-out"
      },
      {
        "value": "3 Regions",
        "label": "Dubai, India and Singapore"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "Back pain by 4 pm. Cables everywhere. Nowhere to take a quiet call. Most office problems start with the furniture. We fix them from the floor up."
        },
        {
          "type": "intro",
          "text": "From a single startup desk to a full headquarters fit-out, we bring together trusted brands for desks, seating, storage and accessories across Dubai, India and Singapore."
        }
      ],
      [
        {
          "type": "heading",
          "title": "Office Furniture Categories"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Desks & Workstations",
              "body": [
                "Durable desk lines from Gebbwork, Markant, Libero Italy and Versalink. Markant's Matrix and MOx sit-stand desks have silent motors and saved height presets to keep your team moving. Versalink is our reliable, budget-friendly pick."
              ]
            },
            {
              "title": "Ergonomic & Task Seating",
              "body": [
                "Executive, task and visitor chairs from Cavaletti, Forma5, Bestuhl, Merryfair and Jwesys. Look for synchro-tilt, adjustable lumbar support, headrests and seat-depth adjustment on higher-end models."
              ]
            },
            {
              "title": "Meeting & Training Furniture",
              "body": [
                "Worklyffe tables built for meeting rooms, training spaces and team areas."
              ]
            },
            {
              "title": "Storage",
              "body": [
                "Gebbwork cabinets and bookcases for everyday storage, Safe Lockers for secure personal storage."
              ]
            },
            {
              "title": "Power & Cable Management",
              "body": [
                "Broad Power monitor arms, cable organisers and desk power modules. Clean desks, safer cables."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Gebbwork",
              "href": "/brands/gebbwork"
            },
            {
              "label": "Markant",
              "href": "/brands/markant"
            },
            {
              "label": "Cavaletti",
              "href": "/brands/cavaletti"
            },
            {
              "label": "Forma5",
              "href": "/brands/forma5"
            },
            {
              "label": "Worklyffe",
              "href": "/brands/worklyffe"
            },
            {
              "label": "Broad Power",
              "href": "/brands/broad-power"
            },
            {
              "label": "Versalink",
              "href": "/download-profiles/versalink"
            },
            {
              "label": "Safe Lockers",
              "href": "/brands/safe-lockers"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: Open Text",
          "body": [
            "Office furniture supplied and installed by Furniconcepts."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/open-text/01.webp",
            "/images/projects/open-text/02.webp",
            "/images/projects/open-text/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/open-text"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Which brands do you supply?",
              "a": "Gebbwork, Markant, Cavaletti, Forma5, Worklyffe, Broad Power, Versalink and Safe Lockers."
            },
            {
              "q": "What makes a chair ergonomic?",
              "a": "Adjustable lumbar support, armrests, headrest and seat depth. Synchro-tilt on higher-end chairs reduces spinal pressure when you recline."
            },
            {
              "q": "Do you have sit-stand desks?",
              "a": "Yes, Markant's Matrix and MOx."
            },
            {
              "q": "Are sit-stand desks worth it?",
              "a": "They encourage movement and posture changes through the day, which is why many hybrid and health-focused offices choose them."
            },
            {
              "q": "Can furniture be customised?",
              "a": "Yes, including desk height, chair selection and add-ons like monitor arms."
            },
            {
              "q": "Do you work with startups?",
              "a": "Yes, from budget lines like Versalink to premium Forma5 and Markant."
            },
            {
              "q": "Can you furnish a whole floor at once?",
              "a": "Yes, from workstations to meeting rooms and storage."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Ready for an office your team actually enjoys?",
      "body": [
        "Let's plan it."
      ],
      "buttons": [
        {
          "label": "Furnish Your Office With Us",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/outdoor-indoor-umbrella-supplier.php",
    "name": "Outdoor & Indoor Umbrellas",
    "hero": "/images/blog/outdoor-umbrellas/hero.webp",
    "title": "Outdoor & Indoor Umbrella Supplier",
    "eyebrow": "Outdoor & Indoor Umbrellas",
    "summary": "Commercial umbrellas for hotels, restaurants, hospitals and outdoor spaces, supplied and installed across the UAE, India and Singapore.",
    "sections": [
      [
        {
          "type": "heading",
          "title": "Features of Our Umbrella Systems",
          "body": [
            "Each system is chosen for the climate it will face, the space it has to fit and the look the venue needs."
          ]
        },
        {
          "type": "cards",
          "style": "features",
          "items": [
            {
              "title": "UV, Heat & Weather Protection",
              "body": [
                "Fabrics and frames selected for intense sun in the UAE, heavy rain in India and humidity in Singapore."
              ],
              "icon": "sparkle"
            },
            {
              "title": "Commercial Durability",
              "body": [
                "Frames and canopies built for daily use in hotels, restaurants, hospitals and campuses."
              ],
              "icon": "gear"
            },
            {
              "title": "Premium Presentation",
              "body": [
                "Designs suited to hospitality, rooftop dining and branded guest spaces."
              ],
              "icon": "gem"
            },
            {
              "title": "Space Efficiency",
              "body": [
                "Cantilever, wall-mounted and compact systems for tight urban layouts and busy walkways."
              ],
              "icon": "grid"
            },
            {
              "title": "Customization",
              "body": [
                "Size, fabric, colour, finish and branding matched to each project."
              ],
              "icon": "leaf"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQs",
          "body": [
            "Quick answers for hospitality, healthcare and commercial umbrella projects in the UAE, India and Singapore."
          ]
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "Which umbrella works best for my region?",
              "a": "In the UAE, choose strong UV protection and heat-ready materials. In India, weather-ready fabrics that handle heat, rain and humidity. In Singapore, cantilever umbrellas are popular because they save space and keep layouts clean."
            },
            {
              "q": "Do you supply umbrellas for hotels, restaurants and hospitals?",
              "a": "Yes. Furniconcepts supplies umbrellas for hotels, resorts, restaurants, cafés, rooftop venues, hospitals and campuses."
            },
            {
              "q": "Can umbrellas be customized for branding?",
              "a": "Yes. Umbrellas can be customized in size, colour, canopy fabric, structure and branding to suit each project."
            },
            {
              "q": "Which countries do you deliver to?",
              "a": "We supply and install commercial umbrellas across the UAE, India and Singapore."
            },
            {
              "q": "Do you handle installation?",
              "a": "Yes. Furniconcepts coordinates supply planning and installation for commercial umbrella projects."
            }
          ]
        }
      ]
    ],
    "titleAccent": "in UAE, IN, SG",
    "stats": [
      {
        "value": "Climate Ready",
        "label": "Built for UAE heat, Indian monsoons and Singapore humidity"
      },
      {
        "value": "Hospitality Focus",
        "label": "Shade for pools, terraces, rooftops and outdoor dining"
      },
      {
        "value": "Project Support",
        "label": "Sizing, branding, supply and installation coordination"
      }
    ],
    "cta": {
      "title": "Looking for a Commercial Umbrella Supplier?",
      "body": [
        "Furniconcepts supplies umbrella systems for hotels, restaurants, hospitals and outdoor commercial spaces across the UAE, India and Singapore. Contact us for a project consultation and quotation."
      ],
      "buttons": [
        {
          "label": "Contact Us",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/stadium-seating.php",
    "name": "Stadium Seating",
    "hero": "/images/cavaletti/auditorium.jpg",
    "card": "/images/categories/stadium-seating-card.webp",
    "title": "Stadium Seating Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Stadium Seating",
    "summary": "Fixed, bleacher, retractable and VIP stadium seating from Jwesys and Leadcom, across the UAE and India.",
    "stats": [
      {
        "value": "4 Seating Types",
        "label": "Fixed, bleacher, retractable and VIP"
      },
      {
        "value": "UAE + India",
        "label": "Chennai, Bangalore, Hyderabad, Mumbai and Delhi"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "Fans will stand for a goal. They shouldn't have to stand because the seats are uncomfortable. We give every stand, from school grounds to arenas, seating that lasts."
        },
        {
          "type": "intro",
          "text": [
            "As the regional distributor for ",
            {
              "label": "Jwesys",
              "href": "/brands/jwesys"
            },
            " and ",
            {
              "label": "Leadcom",
              "href": "/brands/leadcom"
            },
            ", we supply fixed, bleacher, retractable and VIP stadium seating across the UAE and Indian cities including Chennai, Bangalore, Hyderabad, Mumbai and Delhi."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Seating Options"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Fixed Stadium Chairs",
              "body": [
                "Individual seats for permanent stands, the go-to for most arenas and school grounds."
              ]
            },
            {
              "title": "Bleacher / Bench Seating",
              "body": [
                "Maximum capacity at the lowest cost, ideal for schools and training grounds."
              ]
            },
            {
              "title": "Retractable Seating",
              "body": [
                "Stands that fold away when you need the floor for something else."
              ]
            },
            {
              "title": "VIP / Premium Seating",
              "body": [
                "Better comfort and better sightlines for premium stands and boxes."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Brands"
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Jwesys",
              "href": "/brands/jwesys"
            },
            {
              "label": "Leadcom",
              "href": "/brands/leadcom"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "What types do you supply?",
              "a": "Fixed, bleacher, retractable and VIP seating."
            },
            {
              "q": "How much does it cost?",
              "a": "It depends on the seating type, quantity and finish. Contact us for a quotation for your venue."
            },
            {
              "q": "What's the cheapest stadium seating?",
              "a": "Bleacher or bench seating, which gives the most capacity per square metre."
            },
            {
              "q": "Which brands do you use?",
              "a": "Jwesys and Leadcom."
            },
            {
              "q": "Fixed or retractable?",
              "a": "Fixed costs less per seat at scale. Retractable costs more but frees up the floor."
            },
            {
              "q": "Can one venue mix seating types?",
              "a": "Yes. Many venues combine fixed stands with a VIP section."
            },
            {
              "q": "Which cities do you serve?",
              "a": "Chennai, Bangalore, Hyderabad, Mumbai, Delhi and the UAE."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Filling a stand?",
      "body": [
        "Tell us the capacity and we'll do the rest."
      ],
      "buttons": [
        {
          "label": "Get a Stadium Seating Quote",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/school-furniture.php",
    "name": "School Furniture",
    "hero": "/images/projects/philiphines/banner.webp",
    "card": "/images/categories/school-furniture-card.webp",
    "title": "School & Classroom Furniture Suppliers",
    "titleAccent": "in UAE, IN, SG",
    "eyebrow": "Education & School Furniture",
    "summary": "Classroom chairs, modular desks and training seating for schools and colleges across Dubai, India and Singapore.",
    "stats": [
      {
        "value": "Rows to Groups",
        "label": "Modular desks that rearrange in minutes"
      },
      {
        "value": "Stackable",
        "label": "Educomfort Pro chairs with optional writing tablet"
      },
      {
        "value": "K-12 to College",
        "label": "Schools, universities and training institutes"
      }
    ],
    "sections": [
      [
        {
          "type": "hook",
          "text": "Rows today, group work tomorrow, exams next week. Classrooms change constantly. Your furniture should keep up."
        },
        {
          "type": "intro",
          "text": "We supply classroom desks, chairs and modular furniture for schools, colleges and training institutes across Dubai, India and Singapore, designed to be comfortable for students, tough enough for daily use and easy to rearrange."
        }
      ],
      [
        {
          "type": "heading",
          "title": "Classroom Seating & Other Products"
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Classroom Seating",
              "body": [
                "The Teachease Chair has a padded seat and a sturdy metal frame for classrooms and training rooms. The Educomfort Pro Chair stacks for easy storage and comes with an optional writing tablet."
              ]
            },
            {
              "title": "Modular Desks & Layouts",
              "body": [
                "Set up rows, groups or open spaces in minutes, and change them whenever your teaching does."
              ]
            },
            {
              "title": "Training & Lecture Seating",
              "body": [
                "Built for training rooms and lecture-style teaching."
              ]
            },
            {
              "title": "Storage",
              "body": [
                "Gebbwork storage lines, as on our Office Furniture page."
              ],
              "link": {
                "label": "See Office Furniture",
                "href": "/office-furniture.php"
              }
            }
          ]
        },
        {
          "type": "intro",
          "text": [
            "Looking for school auditorium or sports ground seating? See ",
            {
              "label": "Auditorium Seating",
              "href": "/auditorium-seating.php"
            },
            " and ",
            {
              "label": "Stadium Seating",
              "href": "/stadium-seating.php"
            },
            "."
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Classroom Layouts Supported"
        },
        {
          "type": "badges",
          "items": [
            "Traditional rows for lectures and exams",
            "Small groups for collaborative work",
            "Open floor for activities, with chairs stacked away"
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Featured Project: Amity School Qusais",
          "body": [
            "School furniture supplied and installed by Furniconcepts in Dubai."
          ]
        },
        {
          "type": "gallery",
          "images": [
            "/images/projects/amity-school/01.webp",
            "/images/projects/amity-school/02.webp",
            "/images/projects/amity-school/03.webp"
          ]
        },
        {
          "type": "buttons",
          "items": [
            {
              "label": "View the project",
              "href": "/projects/amity-school"
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQ"
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "What products do you supply?",
              "a": "Teachease and Educomfort Pro chairs, plus modular desk systems."
            },
            {
              "q": "Is the furniture reconfigurable?",
              "a": "Yes, for both row and group layouts."
            },
            {
              "q": "Why choose modular classroom furniture?",
              "a": "It lets teachers switch between rows, groups and open layouts to suit each lesson."
            },
            {
              "q": "Do you supply training institutes?",
              "a": "Yes, with space-saving, stackable seating."
            },
            {
              "q": "Do you supply auditorium seating for schools?",
              "a": "Yes, see Auditorium Seating."
            },
            {
              "q": "Do you supply sports ground seating?",
              "a": "Yes, see Stadium Seating."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Building classrooms students want to learn in?",
      "body": [
        "Let's start with the seating plan."
      ],
      "buttons": [
        {
          "label": "Furnish Your Classrooms",
          "href": "/contact"
        }
      ]
    }
  },
  {
    "path": "/telescopic-cinema-seating-manufacturer-dubai.php",
    "name": "Telescopic Seating",
    "hero": "/images/projects/telescopic/banner.webp",
    "title": "Telescopic Cinema Seating Manufacturer",
    "titleAccent": "in Dubai",
    "eyebrow": "Telescopic",
    "summary": "Retractable seating for cinemas, auditoriums and multi-purpose venues, supplied and installed across the UAE and India.",
    "stats": [
      {
        "value": "30+",
        "label": "Years of seating and project expertise"
      },
      {
        "value": "15,000+",
        "label": "Global projects delivered across sectors"
      },
      {
        "value": "40-45",
        "label": "Days manufacturing timeline for custom systems"
      }
    ],
    "sections": [
      [
        {
          "type": "heading",
          "title": "Global Brands, Local Expertise",
          "body": [
            "To remain a top telescopic cinema seating manufacturer in Dubai, we work with global leaders whose products meet demanding performance and comfort expectations."
          ]
        },
        {
          "type": "cards",
          "style": "brands",
          "items": [
            {
              "title": "Leadcom Seating",
              "body": [
                "Industry-leading durability, ergonomics, and auditorium-focused engineering for large-format venues."
              ],
              "link": {
                "label": "Explore Leadcom",
                "href": "/brands/leadcom"
              }
            },
            {
              "title": "Audia Italia",
              "body": [
                "Premium European cinema seating with luxury finishes for elevated audience experience."
              ],
              "link": {
                "label": "Explore Audia Italia",
                "href": "/brands/audia-italia"
              }
            },
            {
              "title": "Cavaletti",
              "body": [
                "Advanced auditorium and workspace seating solutions with refined performance and design quality."
              ],
              "link": {
                "label": "Explore Cavaletti",
                "href": "/brands/cavaletti"
              }
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Our Specialized Seating Solutions",
          "body": [
            "From cinema halls to educational auditoriums, Furniconcepts supports venue transformation with seating programs built around comfort, flexibility, and operational performance."
          ]
        },
        {
          "type": "cards",
          "style": "media",
          "items": [
            {
              "title": "Auditorium & Educational Seating",
              "image": "/images/projects/etisalat-hq-auditorium/01.webp",
              "body": [
                "We are among the leading auditorium seating suppliers in Dubai, delivering ergonomic seating with better sightlines and high-density comfort for educational and performance spaces."
              ],
              "list": [
                "High-density foam seating",
                "Ergonomic lumbar support",
                "Enhanced sightlines"
              ]
            },
            {
              "title": "Cinema & Entertainment Seating",
              "image": "/images/projects/star-cinemas/banner.webp",
              "body": [
                "As a trusted cinema seating supplier in the UAE, we deliver everything from standard cinema chairs to luxury recliners and stadium-style seating solutions."
              ],
              "list": [
                "Cinema chairs with cup holders",
                "Luxury recliner seating",
                "Custom home theater seating",
                "Stadium seating solutions"
              ]
            },
            {
              "title": "Telescopic & Retractable Seating Systems",
              "image": "/images/projects/telescopic/02.webp",
              "body": [
                "Our retractable seating systems are built to transform venues quickly without compromising safety, comfort, or finish quality."
              ],
              "list": [
                "Motorized retractable seating",
                "Manual telescopic systems",
                "Custom finishes in fabric, wood, or plastic"
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Key Features of Our Telescopic Seating Systems",
          "body": [
            "Every system is engineered for daily usability, high audience expectations, and smoother venue operations."
          ]
        },
        {
          "type": "cards",
          "style": "features",
          "items": [
            {
              "title": "Durability",
              "icon": "gem",
              "body": [
                "Heavy-duty steel structure with powder-coated finish for long-term reliability."
              ]
            },
            {
              "title": "Automation",
              "icon": "gear",
              "body": [
                "Motorized operation with smooth folding and dependable transition performance."
              ]
            },
            {
              "title": "Customization",
              "icon": "sparkle",
              "body": [
                "Tailored colors, materials, branding, and finish options for each venue."
              ]
            },
            {
              "title": "Comfort",
              "icon": "posture",
              "body": [
                "Ergonomic form and high-density cushioning built for better audience experience."
              ]
            },
            {
              "title": "Safety",
              "icon": "people",
              "body": [
                "Anti-pinch detailing and internationally aligned compliance-focused specifications."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "FAQs",
          "body": [
            "Quick answers about retractable seating systems, customization, timelines, and ongoing support."
          ]
        },
        {
          "type": "faq",
          "items": [
            {
              "q": "What is telescopic seating?",
              "a": "Telescopic seating is a retractable seating system used to create flexible venue layouts by allowing seat rows to fold and stack when not in use."
            },
            {
              "q": "Do you provide customization?",
              "a": "Yes. Furniconcepts offers custom retractable seating solutions based on venue layout, finish requirements, audience capacity, and branding needs."
            },
            {
              "q": "Do you offer maintenance?",
              "a": "Yes. AMC and maintenance support are available to help preserve long-term performance and smooth operation."
            },
            {
              "q": "What is the delivery timeline in the UAE and India?",
              "a": "Typical production takes 40-45 days. UAE delivery is generally 15-18 days, and India delivery is typically 7-10 days, depending on project scope."
            }
          ]
        }
      ]
    ],
    "cta": {
      "title": "Get a Free Consultation",
      "body": [
        "Looking for the best telescopic cinema seating manufacturer in Dubai or India? Furniconcepts delivers custom design, competitive pricing, expert installation, and project-focused technical support."
      ],
      "buttons": [
        {
          "label": "Get a Free Quote",
          "href": "/contact"
        },
        {
          "label": "WhatsApp Us",
          "href": "https://api.whatsapp.com/send?phone=971503782215&text=I%20want%20a%20quote%20for%20telescopic%20cinema%20seating"
        }
      ]
    }
  }
];

export const getCategoryByPath = (path) => CATEGORY_PAGES.find((c) => c.path === path);

/** The top-level categories, for menus and the home page. */
export const TOP_CATEGORIES = CATEGORY_PAGES.filter((c) => !c.parent);
