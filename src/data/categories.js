/**
 * Category landing pages, carried over from the old site's category pages
 * (furniconcepts.com/acoustic-pods.php, /office-furniture.php, ...) and served
 * at the same URLs. Category.jsx renders any entry: each page is a hero, an
 * optional row of key numbers, then `sections` — lists of content blocks
 * (heading, hook, intro, cards, table, panel, checklist, tags, links,
 * badges, gallery, buttons, faq, stats, columns, text) — and a closing call to action.
 *
 * Rich text is either a string or a list of strings and {label, href} links.
 */
export const CATEGORY_PAGES = [
  {
    "path": "/acoustic-pods.php",
    "name": "Acoustic Pods",
    "hero": "/images/projects/al-futtaim-ho-phone-booth/banner.webp",
    "title": "Acoustic Pods & Sound Solutions Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Acoustic Pods & Solutions",
    "summary": "Furniconcepts supplies Musepod and Zumbooth acoustic pods and phone booths, plus acoustic panels, across Dubai, India and Singapore. Musepod cuts noise by up to 30dB; Zumbooth offers sensor-controlled lighting and ventilation with GREENGUARD certification.",
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
          "title": "Musepod vs Zumbooth"
        },
        {
          "type": "table",
          "columns": [
            "",
            "Musepod",
            "Zumbooth"
          ],
          "rows": [
            [
              "Noise reduction",
              "Up to 30dB",
              "On request"
            ],
            [
              "Sizes",
              "Solo to collaboration spaces",
              "On request"
            ],
            [
              "Smart features",
              "On request",
              "Sensor lighting and ventilation, occupancy light"
            ],
            [
              "Materials",
              "Recycled, FSC-certified boards",
              "90%+ recycled, aluminium frame"
            ],
            [
              "Certification",
              "FSC",
              "GREENGUARD"
            ],
            [
              "Colours",
              "Custom finishes",
              "200+ combinations"
            ],
            [
              "Warranty",
              "On request",
              "2 years"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Pod vs Panel"
        },
        {
          "type": "table",
          "columns": [
            "",
            "Acoustic Pod",
            "Acoustic Panels"
          ],
          "rows": [
            [
              "Privacy",
              "Full visual and sound",
              "None"
            ],
            [
              "Noise control",
              "Inside the pod",
              "Across the whole room"
            ],
            [
              "Cost",
              "Higher",
              "Lower"
            ],
            [
              "Best for",
              "Calls, focus work",
              "Reducing general office noise"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Mostly solo calls? A focus pod or phone booth.",
                      "Small team huddles? A meeting pod.",
                      "The whole floor feels loud? Start with panels.",
                      "ESG targets? Both brands have strong sustainability credentials."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Open-plan offices",
                  "Hybrid teams on constant video calls",
                  "Workplaces with sustainability goals"
                ]
              }
            ]
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
    "summary": "As open-plan workplaces become more common, businesses across Dubai, India, and Singapore are investing in acoustic solutions to improve focus, privacy, and productivity. Furniconcepts delivers silent pods, office phone booths, acoustic wall panels, and ceiling systems tailored for corporate, educational, and commercial environments.",
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
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "Why Acoustic Solutions Matter",
                "body": [
                  "Modern offices and commercial interiors rely on better sound control to support concentration, privacy, and a more comfortable user experience."
                ]
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Silent pods, phone booths, and acoustic panels for modern workspaces",
                      "Solutions tailored for Dubai, India, and Singapore projects",
                      "Options for corporate offices, schools, healthcare, and public spaces",
                      "Support for privacy, focus, speech clarity, and better sound control",
                      "End-to-end planning, supply, and execution support"
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Acoustic Pods & Office Phone Booths",
                "body": [
                  "From acoustic pods in Dubai to office phone booths in India, enclosed acoustic units create fast, flexible privacy zones without full construction work."
                ]
              },
              {
                "type": "cards",
                "items": [
                  {
                    "title": "Acoustic Pods Office Dubai",
                    "body": [
                      "Self-contained acoustic pods create private, noise-controlled spaces inside open-plan offices for calls, deep work, and short meetings."
                    ],
                    "list": [
                      "Sound insulation",
                      "Enhanced productivity",
                      "Modern workspace aesthetics",
                      "Flexible installation",
                      "Ideal for Business Bay, DIFC, and Dubai Marina offices"
                    ]
                  },
                  {
                    "title": "Soundproof Office Pods UAE",
                    "body": [
                      "Popular across corporate workplaces, co-working spaces, call centers, and tech companies that need reliable privacy zones."
                    ],
                    "list": [
                      "Single-person pods",
                      "Meeting pods for 2 to 6 people",
                      "Executive pods"
                    ]
                  },
                  {
                    "title": "Office Phone Booth India",
                    "body": [
                      "Compact acoustic booths are designed for calls, video meetings, and focused work inside busy office environments."
                    ],
                    "list": [
                      "Bangalore",
                      "Hyderabad",
                      "Chennai",
                      "Mumbai",
                      "Delhi NCR"
                    ]
                  },
                  {
                    "title": "Silent Pods Office India",
                    "body": [
                      "Demand is strong across IT companies, startups, and co-working spaces that need privacy without major construction work."
                    ],
                    "list": [
                      "Ventilation systems",
                      "LED lighting",
                      "Acoustic insulation panels"
                    ]
                  }
                ]
              }
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Acoustic Panels: Wall & Ceiling Solutions",
          "body": [
            "Acoustic panels improve speech clarity and reduce echo in everything from conference rooms and auditoriums to healthcare and education spaces."
          ]
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Acoustic Wall Panels India",
              "body": [
                "Acoustic wall panels are designed to absorb sound and reduce echo in work and learning environments."
              ],
              "list": [
                "Conference rooms",
                "Auditoriums",
                "Offices",
                "Studios",
                "Better acoustics",
                "Clearer speech",
                "Enhanced interior design"
              ]
            },
            {
              "title": "Acoustic Ceiling Panels Dubai",
              "body": [
                "Ceiling panels help control reflected sound from overhead surfaces and are especially useful in hard-finished commercial interiors."
              ],
              "list": [
                "Offices",
                "Airports",
                "Hospitals",
                "Educational institutions",
                "Fire-resistant materials",
                "Modern designs",
                "Easy maintenance"
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Pods vs Panels",
          "body": [
            "Pods and panels solve different acoustic problems. Pods create enclosed private spaces, while panels improve overall sound absorption and speech comfort."
          ]
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "Acoustic Pods",
            "Acoustic Panels"
          ],
          "rows": [
            [
              "Purpose",
              "Private space",
              "Sound absorption"
            ],
            [
              "Installation",
              "Modular",
              "Fixed"
            ],
            [
              "Cost",
              "High",
              "Medium"
            ],
            [
              "Flexibility",
              "High",
              "Low"
            ],
            [
              "Best For",
              "Calls and meetings",
              "Noise control"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "Pricing Overview: Dubai, India & Singapore",
                "body": [
                  "Pricing depends on size, acoustic specification, finish quality, and the complexity of the product or installation."
                ]
              },
              {
                "type": "table",
                "columns": [
                  "Acoustic Pods Pricing",
                  "Price Range"
                ],
                "rows": [
                  [
                    "Dubai",
                    "AED 15,000 - AED 80,000+"
                  ],
                  [
                    "India",
                    "Rs. 2,00,000 - Rs. 10,00,000+"
                  ],
                  [
                    "Singapore",
                    "SGD 5,000 - SGD 25,000+"
                  ]
                ]
              },
              {
                "type": "table",
                "columns": [
                  "Acoustic Panels Pricing",
                  "Price Range"
                ],
                "rows": [
                  [
                    "Wall Panels",
                    "AED 100 - AED 500 / panel"
                  ],
                  [
                    "Ceiling Panels",
                    "AED 150 - AED 700 / panel"
                  ]
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Applications",
                "body": [
                  "Acoustic solutions are now part of modern planning for focused work, speech privacy, and better interior comfort."
                ]
              },
              {
                "type": "tags",
                "items": [
                  "Corporate offices",
                  "Co-working spaces",
                  "Educational institutions",
                  "Healthcare facilities",
                  "Airports and public spaces"
                ]
              }
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Why Choose Furniconcepts",
          "body": [
            "Furniconcepts supports acoustic projects with the right mix of workspace privacy products, panel systems, and coordinated project execution."
          ]
        },
        {
          "type": "cards",
          "items": [
            {
              "title": "Premium Acoustic Solutions",
              "body": [
                "High-performance pods, booths, wall panels, and ceiling systems for commercial-grade use."
              ]
            },
            {
              "title": "Custom Design Capability",
              "body": [
                "Solutions can be matched to layout, capacity, privacy, and design goals."
              ]
            },
            {
              "title": "Global Presence",
              "body": [
                "Project support across UAE, India, and Singapore with consistent commercial standards."
              ]
            },
            {
              "title": "End-to-End Execution",
              "body": [
                "From planning and selection to supply and installation, delivery stays coordinated under one team."
              ]
            }
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Explore More Acoustic Solutions",
          "body": [
            "Use these guides to compare acoustic products and plan the right privacy and sound-control strategy for your workplace."
          ]
        },
        {
          "type": "links",
          "items": [
            {
              "label": "Compare acoustic pods and phone booths",
              "href": "/acoustic-pods-vs-phone-booths.php"
            },
            {
              "label": "Explore acoustic wall and ceiling solutions",
              "href": "/acoustic-wall-panels-ceiling-solutions.php"
            },
            {
              "label": "Learn how to soundproof an office",
              "href": "/how-to-soundproof-office.php"
            }
          ]
        }
      ],
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
              "a": "Acoustic pod pricing in Dubai commonly ranges from AED 15,000 to AED 80,000 or more depending on size, finish, and features."
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
    "hero": "/images/cavaletti/beam-seating-dark.jpg",
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
    "name": "Auditorium",
    "hero": "/images/projects/etisalat-hq-auditorium/banner.webp",
    "title": "Auditorium Seating Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Auditorium Seating",
    "summary": "Furniconcepts supplies fixed, retractable and custom VIP auditorium seating in Dubai, India and Singapore as the regional distributor for Leadcom and Audia Italia. Every project includes 3D layout planning, BIFMA-standard construction and on-site installation, with 7-day delivery available from Dubai stock.",
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
          "title": "Compare Seating Types"
        },
        {
          "type": "table",
          "columns": [
            "",
            "Fixed",
            "Retractable (Telescopic)",
            "Custom VIP (Audia Italia)"
          ],
          "rows": [
            [
              "Best for",
              "Dedicated halls",
              "Multi-use spaces",
              "Premium theatres, VIP rows"
            ],
            [
              "Floor flexibility",
              "None",
              "Folds flat against wall",
              "None"
            ],
            [
              "Key feature",
              "22\" pitch, 100,000-cycle cushioning",
              "Moves up to 50 rows at once",
              "Fully tailored finishes"
            ],
            [
              "Warranty",
              "On request",
              "5 years on mechanism",
              "On request"
            ],
            [
              "Lead time",
              "On request",
              "40–45 days (15–18 days premium UAE)",
              "On request"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Will the room host only seated events? Choose fixed.",
                      "Does it need to become open floor space? Choose retractable.",
                      "Is it a premium or branded venue? Consider Audia Italia.",
                      "Are sessions longer than two hours? Prioritise lumbar support and cushioning.",
                      "Is it a lecture hall? Add tablet arms."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Corporate town halls",
                  "Cinemas and multiplexes",
                  "Lecture halls",
                  "School gyms that double as auditoriums"
                ]
              }
            ]
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
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Hospitality Furniture",
    "summary": "Furniconcepts furnishes hotels, resorts, restaurants and cafés across Dubai, India and Singapore, with SCAB Italy lounge seating, Worklyffe lobby and café furniture, and outdoor umbrella systems for pools and terraces.",
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
          "title": "What We Furnish"
        },
        {
          "type": "table",
          "columns": [
            "Space",
            "What we supply",
            "Brand"
          ],
          "rows": [
            [
              "Lobby & lounge",
              "Designer lounge seating",
              "SCAB Italy"
            ],
            [
              "Cafés & informal areas",
              "Collaborative furniture",
              "Worklyffe"
            ],
            [
              "Guest & public areas",
              "Durable, brand-aligned furniture",
              "On request"
            ],
            [
              "Pool & terrace",
              "Umbrella systems",
              "On request"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Hotel vs Cruise Furniture"
        },
        {
          "type": "table",
          "columns": [
            "",
            "Hotel",
            "Cruise / Marine"
          ],
          "rows": [
            [
              "Materials",
              "Commercial grade",
              "Marine-grade stainless steel"
            ],
            [
              "Compliance",
              "Local codes",
              "IMO/SOLAS"
            ],
            [
              "Finish",
              "Standard",
              "Salt-corrosion resistant"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Start with your brand story. Furniture should reflect it.",
                      "Pick hard-wearing pieces for high-traffic public areas.",
                      "Plan indoor and outdoor spaces together for a consistent look.",
                      "Balance comfort with space so guests never feel crowded."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Hotels and resorts",
                  "Restaurants and bars",
                  "Cafés and informal spaces"
                ]
              }
            ]
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
    "name": "Hospital",
    "hero": "/images/projects/healthhub/01.webp",
    "title": "Healthcare & Hospital Furniture Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Healthcare Furniture",
    "summary": "Furniconcepts supplies Nitrocare hospital beds, ICU beds, stretchers, exam chairs and lab furniture across Dubai, India and Singapore. Nitrocare is an award-winning manufacturer with a 60,000m² facility and Red Dot and German Design Award wins.",
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
          "title": "Hospital Beds at a Glance"
        },
        {
          "type": "table",
          "columns": [
            "Model",
            "Use",
            "Key features"
          ],
          "rows": [
            [
              "NITRO HB 7240",
              "Home care",
              "Four motors"
            ],
            [
              "NITRO HB 8140",
              "Intensive care",
              "Height-adjustable, Trendelenburg, CPR release, 18cm X-ray extension"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Clinical Features Explained"
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "What it does"
          ],
          "rows": [
            [
              "Trendelenburg positioning",
              "Tilts the bed head-down for clinical procedures"
            ],
            [
              "CPR quick-release",
              "Flattens the bed instantly in an emergency"
            ],
            [
              "X-ray extension (18cm)",
              "Allows imaging without moving the patient"
            ]
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
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Match bed type to care level: home, ward or ICU.",
                      "For ICUs, look for CPR release and imaging compatibility.",
                      "Plan stretchers and trolleys alongside beds for smooth patient flow.",
                      "Add clinic exam chairs and lab furniture to the same order."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Hospitals and ICUs",
                  "Clinics and outpatient centres",
                  "Home care",
                  "In-hospital labs"
                ]
              }
            ]
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
    "title": "Lounge Seating Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Lounge Seating",
    "summary": "Furniconcepts supplies lounge chairs, modular sofas and collaborative seating for hotels, offices, coworking spaces and cafés across Dubai, India and Singapore, from SCAB Italy and Worklyffe, including the curved, modular Sofa Vortex.",
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
          "title": "Lounge Seating by Space"
        },
        {
          "type": "table",
          "columns": [
            "Space",
            "Recommended",
            "Why"
          ],
          "rows": [
            [
              "Hotel lobby",
              "SCAB Italy",
              "Designer look, durable materials"
            ],
            [
              "Office breakout",
              "SCAB Italy, Sofa Vortex",
              "Works across hospitality and workspace"
            ],
            [
              "Coworking & cafés",
              "Worklyffe",
              "Built for collaborative use"
            ],
            [
              "Reception",
              "Sofa Vortex",
              "Curved, flexible arrangement"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Decide the mood: relaxed, social or semi-formal.",
                      "Modular sofas adapt as your layout changes.",
                      "Choose durable fabrics for busy spaces.",
                      "Match lounge pieces to the rest of your interior."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Hotel lobbies",
                  "Corporate breakout spaces",
                  "Coworking spaces and cafés",
                  "Waiting areas"
                ]
              }
            ]
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
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Office & Workplace Furniture",
    "summary": "Furniconcepts supplies desks, ergonomic chairs, meeting furniture, storage and cable management across Dubai, India and Singapore from brands including Gebbwork, Markant, Cavaletti, Forma5 and Worklyffe, for everything from startup offices to full headquarters fit-outs.",
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
          "title": "What We Supply, and From Whom"
        },
        {
          "type": "table",
          "columns": [
            "Category",
            "Brands",
            "Highlights"
          ],
          "rows": [
            [
              "Desks & workstations",
              "Gebbwork, Markant, Libero Italy, Versalink",
              "Sit-stand desks with silent motors and presets"
            ],
            [
              "Ergonomic seating",
              "Cavaletti, Forma5, Bestuhl, Merryfair, Jwesys",
              "Synchro-tilt, lumbar, seat-depth adjustment"
            ],
            [
              "Meeting & training",
              "Worklyffe",
              "Meeting and training tables"
            ],
            [
              "Storage",
              "Gebbwork, Safe Lockers",
              "Cabinets, bookcases, secure lockers"
            ],
            [
              "Power & cables",
              "Broad Power",
              "Monitor arms, cable organisers, desk power"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Budget Guide"
        },
        {
          "type": "table",
          "columns": [
            "Tier",
            "Good for",
            "Example brands"
          ],
          "rows": [
            [
              "Budget-friendly",
              "Startups, quick setups",
              "Versalink"
            ],
            [
              "Mid-range",
              "Growing teams",
              "Gebbwork, Worklyffe"
            ],
            [
              "Premium",
              "HQs, executive floors",
              "Markant, Forma5, Cavaletti"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Popular Picks"
        },
        {
          "type": "table",
          "columns": [
            "Product",
            "Type",
            "Shop",
            "Price"
          ],
          "rows": [
            [
              "Nero Task Chair with Headrest",
              "Task chair",
              "UAE",
              "AED 2,100"
            ],
            [
              "Bianco Task Chair O2B (Grey Mesh)",
              "Task chair",
              "UAE",
              "AED 1,150"
            ],
            [
              "Bianco Task Chair O2B (Foam Seat)",
              "Task chair",
              "UAE",
              "AED 1,100"
            ],
            [
              "Warren Swivel Chair",
              "Meeting chair",
              "UAE",
              "AED 1,100"
            ],
            [
              "Haven HB Massage Chair",
              "Executive chair",
              "India",
              "Price on request"
            ],
            [
              "Boss HB / MB Chair",
              "Executive chair",
              "India",
              "Price on request"
            ],
            [
              "Butterfly HB Designer Chair",
              "Reception accent chair",
              "India",
              "Price on request"
            ],
            [
              "Optimus Eco HB Chair",
              "Eco ergonomic chair",
              "India",
              "Price on request"
            ],
            [
              "Sofa Vortex",
              "Modular reception sofa",
              "India",
              "Price on request"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "Ergonomic Chair Checklist"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Adjustable seat height and depth",
                      "Adjustable lumbar support",
                      "Adjustable armrests",
                      "Headrest for long desk hours",
                      "Synchro-tilt recline"
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Corporate headquarters",
                  "Startups",
                  "Hybrid and health-focused workplaces",
                  "Government and institutional control rooms"
                ]
              }
            ]
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
    "hero": "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=1800&q=80&auto=format&fit=crop",
    "title": "Outdoor & Indoor Umbrellas",
    "eyebrow": "Outdoor & Indoor Umbrellas",
    "summary": "Choose your region to explore commercial umbrella supplier pages for Dubai, India, and Singapore across hospitality, healthcare, dining, and premium outdoor spaces.",
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
                "Explore umbrella supplier solutions for Dubai hotels, restaurants, hospitals, poolside zones, and premium outdoor commercial spaces."
              ],
              "link": {
                "label": "View Dubai",
                "href": "/outdoor-indoor-umbrella-supplier-dubai.php"
              }
            },
            {
              "title": "India",
              "body": [
                "See umbrella supplier options built for Indian hotels, hospitals, restaurants, campuses, and climate-ready commercial projects."
              ],
              "link": {
                "label": "View India",
                "href": "/outdoor-indoor-umbrella-supplier-india.php"
              }
            },
            {
              "title": "Singapore",
              "body": [
                "Browse premium umbrella supplier content tailored for Singapore hospitality venues, clinics, cafes, and compact high-end urban spaces."
              ],
              "link": {
                "label": "View Singapore",
                "href": "/outdoor-indoor-umbrella-supplier-singapore.php"
              }
            }
          ]
        }
      ]
    ]
  },
  {
    "path": "/stadium-seating.php",
    "name": "Stadium",
    "hero": "/images/cavaletti/auditorium.jpg",
    "title": "Stadium Seating Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Stadium Seating",
    "summary": "Furniconcepts supplies fixed, bleacher, retractable and VIP stadium seating through Jwesys and Leadcom, with projects across the UAE and Chennai, Bangalore, Hyderabad, Mumbai and Delhi. In India, fixed stadium chairs start from ₹800 per seat.",
    "stats": [
      {
        "value": "From ₹800",
        "label": "Per seat for fixed stadium chairs in India"
      },
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
          "title": "Compare Seating Types"
        },
        {
          "type": "table",
          "columns": [
            "Type",
            "Best for",
            "Flexibility"
          ],
          "rows": [
            [
              "Bleacher / Bench",
              "Schools, training grounds",
              "Fixed"
            ],
            [
              "Fixed Chairs",
              "Arenas, university grounds",
              "Fixed"
            ],
            [
              "Retractable",
              "Multi-purpose venues",
              "Folds away"
            ],
            [
              "VIP / Premium",
              "Premium stands, boxes",
              "Fixed"
            ]
          ]
        }
      ],
      [
        {
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Start with capacity and budget per seat.",
                      "Need the floor for other events? Go retractable.",
                      "Selling premium tickets? Add a VIP section.",
                      "Schools on tight budgets often start with bleachers.",
                      "Ask about outdoor suitability for open-air stands."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "Sports arenas",
                  "School and university grounds",
                  "Multi-purpose venues"
                ]
              }
            ]
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
              "a": "In India, from ₹800 per seat for fixed chairs and ₹15,000+ for retractable and premium systems."
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
    "name": "School",
    "hero": "/images/projects/philiphines/banner.webp",
    "title": "School & Classroom Furniture Suppliers",
    "titleAccent": "in Dubai, India & Singapore",
    "eyebrow": "Education & School Furniture",
    "summary": "Furniconcepts supplies classroom chairs, modular desks and training seating for schools, colleges and training institutes in Dubai, India and Singapore, including the Teachease and Educomfort Pro chairs, designed for comfort, durability and flexible layouts.",
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
          "title": "Classroom Chairs Compared"
        },
        {
          "type": "table",
          "columns": [
            "",
            "Teachease Chair",
            "Educomfort Pro Chair"
          ],
          "rows": [
            [
              "Best for",
              "Classrooms, training rooms",
              "Classrooms, flexible spaces"
            ],
            [
              "Seat",
              "Padded",
              "Comfortable shell"
            ],
            [
              "Frame",
              "Durable metal",
              "Durable"
            ],
            [
              "Writing tablet",
              "No",
              "Optional"
            ],
            [
              "Stackable",
              "No",
              "Yes"
            ]
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
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "title": "How to Choose"
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Will rooms be rearranged often? Choose modular desks and stackable chairs.",
                      "Do students write without desks? Add tablet arms.",
                      "Short on storage? Stacking chairs save space.",
                      "Plan auditorium and sports seating in the same project for a consistent campus."
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Built For"
              },
              {
                "type": "tags",
                "items": [
                  "K-12 schools",
                  "Colleges and universities",
                  "Training institutes",
                  "Coaching centres"
                ]
              }
            ]
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
    "name": "Telescopic",
    "hero": "/images/projects/telescopic/banner.webp",
    "title": "Telescopic Cinema Seating Manufacturer",
    "titleAccent": "in Dubai",
    "eyebrow": "Telescopic",
    "summary": "Furniconcepts delivers advanced retractable seating systems for cinemas, auditoriums, and multi-purpose venues across the UAE and India, combining global engineering with local execution, installation, and compliance expertise.",
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
          "type": "columns",
          "columns": [
            [
              {
                "type": "heading",
                "eyebrow": "Overview",
                "title": "What Is Telescopic Cinema Seating?",
                "body": [
                  "Telescopic cinema seating is a retractable seating system that allows rows of seats to fold and stack when not in use. It is ideal for venues that need to transform quickly between screening, event, and open-floor modes without sacrificing audience comfort."
                ]
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Saves space for high-value multi-use venues",
                      "Converts halls into flexible event environments",
                      "Perfect for cinemas, auditoriums, institutions, and event spaces"
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "eyebrow": "Why Us",
                "title": "Why Furniconcepts"
              },
              {
                "type": "tags",
                "items": [
                  "Leading cinema seating supplier in Dubai with turnkey execution capability",
                  "Technical consultants focused on ROI, space optimization, and audience comfort",
                  "Local design, distribution, installation, and post-installation support",
                  "Solutions for multiplexes, corporate auditoriums, universities, and event venues"
                ]
              }
            ]
          ]
        }
      ],
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
          "title": "Fixed vs. Telescopic Seating",
          "body": [
            "For Dubai's flexible venue requirements, retractable seating gives operators stronger space utilization and better long-term functional value."
          ]
        },
        {
          "type": "table",
          "columns": [
            "Feature",
            "Fixed Seating",
            "Telescopic Seating"
          ],
          "rows": [
            [
              "Space Usage",
              "Permanent",
              "Space-saving"
            ],
            [
              "Best For",
              "Dedicated theaters",
              "Multi-purpose halls"
            ],
            [
              "Flexibility",
              "Low",
              "High"
            ],
            [
              "Operation",
              "Manual",
              "Motorized"
            ],
            [
              "Benefit",
              "Luxury comfort",
              "Up to 90% space recovery"
            ]
          ]
        }
      ],
      [
        {
          "type": "heading",
          "title": "Technical Expertise in Dubai and India",
          "body": [
            "We provide turnkey workspace solutions tailored to the regulatory, budgetary, and functional demands of the Middle East and the Indian subcontinent."
          ]
        },
        {
          "type": "cards",
          "style": "pillars",
          "items": [
            {
              "title": "Dubai & UAE",
              "icon": "globe",
              "body": [
                "Focused on high-tech automation, luxury finishes, and rapid 15-18 day delivery for premium venue projects across the UAE."
              ]
            },
            {
              "title": "India",
              "icon": "chart",
              "body": [
                "Focused on cost-effective auditorium seating, GST-compliant billing, and pan-India installation support for flexible venue requirements."
              ]
            },
            {
              "title": "Compliance",
              "icon": "gem",
              "body": [
                "All materials are aligned with BS 5852 fire safety expectations and BIFMA-certified durability standards for dependable long-term use."
              ]
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
          "type": "columns",
          "image": "/images/projects/telescopic/04.webp",
          "columns": [
            [
              {
                "type": "heading",
                "title": "Applications in Dubai",
                "body": [
                  "Our retractable and auditorium seating systems are suitable for premium entertainment, educational, and large-capacity public environments."
                ]
              },
              {
                "type": "panel",
                "blocks": [
                  {
                    "type": "checklist",
                    "items": [
                      "Cinemas & multiplexes",
                      "Auditoriums & theatres",
                      "Schools & universities",
                      "Event halls",
                      "Stadiums & arenas"
                    ]
                  }
                ]
              }
            ],
            [
              {
                "type": "heading",
                "title": "Installation & Delivery",
                "body": [
                  "Furniconcepts manages production, delivery, installation, and staff guidance to ensure a clean transition from specification to operation."
                ]
              },
              {
                "type": "stats",
                "items": [
                  {
                    "value": "40-45",
                    "label": "Days manufacturing timeline"
                  },
                  {
                    "value": "15-18",
                    "label": "Days UAE delivery window"
                  },
                  {
                    "value": "7-10",
                    "label": "Days India delivery window"
                  },
                  {
                    "value": "100%",
                    "label": "Installation support and staff training included"
                  }
                ]
              }
            ]
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
