const geared_motor_types = [
    {
        name: 'IRS42-R42',
        description: "Introducing our versatile BLDC Motor, a dynamic solution tailored to meet the diverse demands of your projects. With a power range from 32 to 105 Watts and a base motor RPM of 4000, this motor ensures a perfect balance of power and efficiency. The adaptable nature of this motor is highlighted by its customizable output RPM, ranging from 62 to 1000 RPM, catering to a spectrum of applications. Featuring a standard gear ratio of 4:1, 16:1, and 64:1, our BLDC Motor offers flexibility to suit various torque and speed requirements. Additionally, we provide customized gear ratios to meet specific project needs, ensuring optimal performance in your application. Equipped with an inbuilt hall sensor, this BLDC Motor guarantees precise speed control and accurate position sensing, enhancing overall reliability. Operating seamlessly at 24V, it ensures efficient energy utilization, making it an ideal choice for applications such as robotics, automation systems, or any project requiring tailored power and performance. Elevate your projects with our cutting-edge BLDC Motor technology.",
        KeyFeatures: {
            "Versatile Power Range (32-105 Watts)": "Dynamic solution with a power range suitable for a wide range of applications.",
            "Customizable Output RPM (62-1000)": "Adaptable motor design allows customization of output RPM to meet diverse torque and speed requirements.",
            "Standard and Custom Gear Ratios": "Comes with standard gear ratios of 4:1, 16:1, and 64:1. Customized gear ratios available to suit specific project needs.",
            "Inbuilt Hall Sensor": "Equipped with an inbuilt hall sensor for precise speed control and accurate position sensing.",
            "Efficient Operation at 24V": "Operates seamlessly at 24V, ensuring efficient energy utilization and making it suitable for various projects.",
        },
        technicalDetails: [
            {
                table: {
                    SrNo: [1, 2, 3, 4],
                    Model: [
                        "RD-KJ-BLDC-IR-42-24-0.06-S01-4000-IP",
                        "RD-KJ-BLDC-IR-42-24-0.125-S02-4000-IP",
                        "RD-KJ-BLDC-IR-42-24-0.185-S03-4000-IP",
                        "RD-KJ-BLDC-IR-42-24-0.25-S04-4000-IP"
                    ],
                    Power_W: [32, 52, 77, 105],
                    RatedTorque_Nm: [0.06, 0.125, 0.185, 0.25],
                    Speed_RPM: [6300, 6300, 6300, 6300],
                    CrossSection_C_S: [42, 42, 42, 42],
                    Type: ["BLDC-IR", "BLDC-IR", "BLDC-IR", "BLDC-IR"],
                    OperatingVoltage_VDC: [24, 24, 24, 24],
                }
            }
        ]
    },
    {
        name: 'IRR42-R42',
        description: `Introducing our versatile BLDC Motor, a high-performance solution tailored to meet a wide range of applications. With a power range spanning from 32 to 76 Watts and a base motor RPM of 4000, this motor strikes the perfect balance between power and efficiency. The adaptable design of this motor is highlighted by its customizable output RPM, ranging from 62 to 1000 RPM, offering versatility for various projects.
        Featuring standard gear ratios of 4:1, 16:1, and 64:1, our BLDC Motor provides options to suit diverse torque and speed requirements. For more specialized needs, we offer customized gear ratios, ensuring a perfect match for your unique application.
        Equipped with an inbuilt hall sensor, our BLDC Motor guarantees precise speed control and accurate position sensing, enhancing overall reliability in your system. Operating seamlessly at 24V, it ensures efficient energy utilization, making it an ideal choice for applications such as robotics, automation systems, or any project requiring tailored power and performance. Elevate your projects with our cutting-edge BLDC Motor technology, where customization meets`,
        KeyFeatures: {
            "Versatile BLDC Motor": "High-performance solution for a wide range of applications.",
            "Power Range": "32 to 76 Watts",
            "Base Motor RPM": 4000,
            "Customizable Output RPM": "62 to 1000 RPM",
            "Gear Ratios": "4:1, 16:1, 64:1 (standard), Customized options available",
            "Inbuilt Hall Sensor": "Guarantees precise speed control and accurate position sensing.",
            "Operating Voltage": "24V",
            "Ideal for": "Robotics, Automation Systems, and projects requiring tailored power and performance."
        },
        technicalDetails: [
            {
                table: {
                    SrNo: [1, 2, 3],
                    Motor: [
                        "RD-KJ-BLDC-IR-42-24-0.08-4000-IP",
                        "RD-KJ-BLDC-IR-42-24-0.15-4000-IP",
                        "RD-KJ-BLDC-IR-42-24-0.18-4000-IP"
                    ],
                    Power_W: [32, 62, 76],
                    RatedTorque_Nm: [0.08, 0.15, 0.18],
                    Speed_RPM: [6300, 6300, 6300],
                    Diameter_mm: 42,
                    Type: "BLDC-IR",
                    OperatingVoltage_VDC: 24
                }
            }
        ]
    },
    {
        name: 'IRR57-R65',
        description: `Introducing our high-powered and versatile BLDC Motor, meticulously engineered to meet the demands of diverse applications. With a power range spanning from 23 to 184 Watts and a base motor RPM of 4000, this motor ensures optimal performance across a spectrum of tasks. The adaptable nature of this motor is exemplified by its customizable output RPM, ranging from 62 to 1000 RPM, offering flexibility for a variety of projects.
        Featuring standard gear ratios of 4:1, 16:1, and 64:1, our BLDC Motor provides options to suit different torque and speed requirements. For projects with unique specifications, we offer customized gear ratios, ensuring a tailored solution for your application.
        Equipped with an inbuilt hall sensor, our BLDC Motor guarantees precise speed control and accurate position sensing, enhancing overall reliability. Operating seamlessly at 36Vdc, it ensures efficient energy utilization, making it an ideal choice for applications such as robotics, automation systems, or any project requiring customized power and performance. Elevate your projects with our cutting-edge BLDC Motor technology, where versatility meets excellence.`,
        KeyFeatures: {
            "High-powered and Versatile BLDC Motor": "Meticulously engineered for diverse applications.",
            "Power Range": "23 to 184 Watts",
            "Base Motor RPM": 4000,
            "Customizable Output RPM": "62 to 1000 RPM",
            "Gear Ratios": "4:1, 16:1, 64:1 (standard), Customized options available",
            "Inbuilt Hall Sensor": "Guarantees precise speed control and accurate position sensing.",
            "Operating Voltage": "36Vdc",
            "Ideal for": "Robotics, Automation Systems, and projects requiring customized power and performance."
        },
        technicalDetails: [
            {
                table: {
                    SrNo: [1, 2, 3, 4, 5],
                    Motor: [
                        "KJ-BLDC-IR-57-36-0.05-4000-IP",
                        "KJ-BLDC-IR-57-36-0.11-4000-IP",
                        "KJ-BLDC-IR-57-36-0.22-4000-IP",
                        "KJ-BLDC-IR-57-36-0.33-4000-IP",
                        "KJ-BLDC-IR-57-36-0.44-4000-IP"
                    ],
                    Power_W: [23, 46, 92, 138, 184],
                    RatedTorque_Nm: [0.05, 0.11, 0.22, 0.33, 0.44],
                    Speed_RPM: [6000, 6000, 6000, 6000, 6000],
                    Diameter_mm: 57,
                    Type: "BLDC-IR",
                    OperatingVoltage_VDC: 36,
                }
            }
        ]
    },
    {
        name: 'IRR80-R80',
        description: `Introducing our robust and high-performance BLDC Motor, meticulously designed to meet the demands of a diverse array of applications. With a substantial power range of 110 to 440 Watts and a base motor RPM of 3000, this motor delivers a perfect balance of power and efficiency. The adaptability of this motor is showcased by its customizable output RPM, ranging from 47 to 750 RPM, catering to a variety of project requirements.
        Featuring standard gear ratios of 4:1, 16:1, and 64:1, our BLDC Motor provides options to suit different torque and speed specifications. For projects with unique demands, we offer customized gear ratios, ensuring a tailored solution for your specific application.
        Equipped with an inbuilt hall sensor, our BLDC Motor ensures precise speed control and accurate position sensing, bolstering overall reliability. Operating seamlessly at 48VDC, it guarantees efficient energy utilization, making it an ideal choice for applications such as robotics, automation systems, or any project requiring a customized blend of power and performance. Elevate your projects with our cutting-edge BLDC Motor technology, where adaptability meets excellence.`,
        KeyFeatures: {
            "Robust and High-performance BLDC Motor": "Meticulously designed for diverse applications.",
            "Power Range": "110 to 440 Watts",
            "Base Motor RPM": 3000,
            "Customizable Output RPM": "47 to 750 RPM",
            "Gear Ratios": "4:1, 16:1, 64:1 (standard), Customized options available",
            "Inbuilt Hall Sensor": "Ensures precise speed control and accurate position sensing.",
            "Operating Voltage": "48VDC",
            "Ideal for": "Robotics, Automation Systems, and projects requiring a customized blend of power and performance."
        },
        technicalDetails: [
            {
                table: {
                    SrNo: [1, 2, 3, 4],
                    Motor: [
                        "KJ-BLDC-IR-80-48-0.35-3000-IP",
                        "KJ-BLDC-IR-80-48-0.7-3000-IP",
                        "KJ-BLDC-IR-80-48-1-3000-IP",
                        "KJ-BLDC-IR-80-48-1.4-3000-IP"
                    ],
                    Power_W: [110, 220, 330, 440],
                    RatedTorque_Nm: [0.35, 0.7, 1, 1.4],
                    Speed_RPM: [3000, 3000, 3000, 3000],
                    Diameter_mm: 80,
                    Type: "BLDC-IR",
                    OperatingVoltage_VDC: 48,
                }
            }
        ]
    }


]

export default geared_motor_types;