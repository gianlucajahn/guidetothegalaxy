const audiobookArray = [
    {
        title: 'documentation/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/cB5mmvVrgwHrs1NqSxK7LdZkds3b9SyH',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/W4Yz64wSOOtkDrv6ujPp72X2vv2Etnao',
                duration: '2'
            }
        ]
    },
    {
        title: 'motivation',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/4nI5FCVnVh9q4MvvTazc4Zk444D3A7zb',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/EMtmwUTmzqhxxoAFEwdO1SL79pLjTp6J',
                duration: '5'
            }
        ]
    },
    {
        title: 'destinations',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/7SN7bso8xgFv6OiaDnHuMp7J2C2lFU09',
                duration: '4'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/Hx1ec5RWZaORVuRZ2Lvyxa78WIpH3Pzg',
                duration: '5'
            }
        ]
    },
    {
        title: 'rockets/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/NMHxHqq3EdUDxthtw2C77vk4OFqzaB6t',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/iet2AVpVhS1cZYRBdpyCRBjvyJZJ29Ln',
                duration: '5'
            }
        ]
    },
    {
        title: 'moon/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/wRmlVmQkeWZeCOJwem3D5IyWhnJxJpgO',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/CHa3rmp2ZfAzwj0KmCw646q2VR4uOpzx',
                duration: '1'
            }
        ]
    },
    {
        title: 'dearmoon',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/XKUL50aVL8o45sXjaelAUELGciDwxyCi',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/nsnC2edadHADybVY5DCYCcIjCSvcz1tZ',
                duration: '2'
            }
        ]
    },
    {
        title: 'artemis',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/xBLMLqovIv7fZ8ajKxupMge5kkIX51eL',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/VYhfldomTRKIyu7jEHOHX9wOFgSQ2x1I',
                duration: '3'
            }
        ]
    },
    {
        title: 'mars/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/JmFp8UOL10boK8stpbr0ICdx1CCgz6ZT',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/Flp2JLX3PPW88K1uF7Qa2M5EiQT7Mg2S',
                duration: '1'
            }
        ]
    },
    {
        title: 'basecamp',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/y8gAWJGiokCGQuC9B7L1j3NYF13wyHdd',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/wsjacoxit7h78QTlObiPyMyd4WTQVvHU',
                duration: '3'
            }
        ]
    },
    {
        title: 'city',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/xzOYsPWU6Au2zk1i4xN2h89U5zL7K9e3',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/i3VbVGKDsmJ0tHJ28ZBdtiuHo8TFp3K2',
                duration: '5'
            }
        ]
    },
    {
        title: 'terraforming',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/ZvDXhaDTqxH8xlnFKPxcDZdGXl3PLZuB',
                duration: '4'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/5yZfVPDvrcgoNNBZipJUgqVOgCa3SfX8',
                duration: '6'
            }
        ]
    },
    {
        title: 'venus/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/YRnj0XYPfNhUUcxx81G5JsIFCby1sA50',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/g7aKjnLFjSRLrMWXIB7v0UOQJU0081mb',
                duration: '1'
            }
        ]
    },
    {
        title: 'why',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/KHgWyE0NwT239EcPGh9LHXkJApTVak09',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/EALf79xkfFzElg6LRxUWo4UQIZfUzGnN',
                duration: '3'
            }
        ]
    },
    {
        title: 'problems',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/MGMtPlZyJ5l3NgqtpZhX1ppxrSL3NFnY',
                duration: '5'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/UBulq5h3rfFbantYBqq9FdGBA6pRSbRE',
                duration: '4'
            }
        ]
    },
    {
        title: 'cloudcities',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/QfIyBt7S85xHNPZzh2oiC9C2RcbdTua8',
                duration: '6'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/TPyhHpwklHFwoNPH8L6rzXDrSPNmvXMg',
                duration: '7'
            }
        ]
    },
    {
        title: 'spacehabs/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/1zLzV9LK4XpdBlrbhfkldzphYlkYaeQ9',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/tnoE87JUrheReGQi6wm9oIwA87jIwWk4',
                duration: '1'
            }
        ]
    },
    {
        title: 'concept',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/jykjtyk6UAIOgQUnyftZ2coOGjDvU7Gi',
                duration: '5'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/oaiMKMtCXPngDHRwGevkcxmWEXIRdcnt',
                duration: '5'
            }
        ]
    },
    {
        title: 'resources',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/mzw7pMzquJkVdnThGIV40W8sTIPYcDFA',
                duration: '6'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/sd9AtU7EXPlpZm4pmqHhbemiAUT2x88N',
                duration: '7'
            }
        ]
    },
    {
        title: 'potential',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/EGZITxnGTv60qQB7C9q2p5xATMLPHgeJ',
                duration: '5'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/kyEaVBy8RAbfFzoaRcGQjX2pAYawPXXO',
                duration: '5'
            }
        ]
    },
    {
        title: 'power',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/625UJrDXHnmaCUUAkWCRwRrTRqETjmc5',
                duration: '9'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/NYMRqnu4oTDVVPndf2aoeS9MVaZUmdqM',
                duration: '10'
            }
        ]
    },
    {
        title: 'alienlife/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/3yfpT8VBSyFoCghqbptx6ecXi9pMEpcO',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/urywo3AIckgcrgYXH1SovCcRIedCqSO2',
                duration: '1'
            }
        ]
    },
    {
        title: 'search',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/Qa5ujRoQlUzeMCbfIPWdmcjIkUxRz5ny',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/BP2aXxIRnc2VZezwrBw8vtIzscDc9ZgX',
                duration: '4'
            }
        ]
    },
    {
        title: 'fermi',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/tyvlSFOk28JWzXk4bhxE3KAqZti7muT0',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/us5AGQ9ZhB0ICGkc7AYI4IX35lkkfiSa',
                duration: '2'
            }
        ]
    },
    {
        title: 'kardashev',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/4QjYRoshIpV5EodwBOZ8cUBt4e2HHv11',
                duration: '5'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/rtOqEfxFpOaSMiQDB3nNZ5D3PkpmY8H1',
                duration: '5'
            }
        ]
    },
    {
        title: 'filter',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/yEle5XCws3qs9B2ShCB1wfrjoa7Gj0lB',
                duration: '6'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/wgNhRlAWCG57Dq7yVG9KpSYx5MUcfWMD',
                duration: '7'
            }
        ]
    },
    {
        title: 'solutions',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/4YLdNhKjlPsncYLgPlISWbvtCFUEW8Bo',
                duration: '7'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/oOPTgtedYZOM1VmWSaCK1Cc7gxp85lbm',
                duration: '8'
            }
        ]
    },
    {
        title: 'conclusion',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/weSejGE9JmC4mvBhBUZhIinBPc4rRjTl',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/kns48PJ9HtPnkIe8Z8jfa0977e7435G9',
                duration: '3'
            }
        ]
    },
    {
        title: 'distantsystems/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/703T1Y5jHPojop1MUCEVsjO9Yk4dcyQz',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/n6XsSG643InBjjzJkWr5e37W52YukN4S',
                duration: '1'
            }
        ]
    },
    {
        title: 'trappist',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/nLZKdVRpAEfksgELL2MzgkrhXdLytkaB',
                duration: '7'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/3Y5FsJZ3uwBLCWBh8XS8Br0hsAf2ZJat',
                duration: '9'
            }
        ]
    },
    {
        title: 'proxima',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/fAHdgozQo3s6EEatRYqYJNDDZJPD2wA9',
                duration: '4'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/Mf5QLmddtYOdFdJp0tbsTuNOWD3xOUNs',
                duration: '4'
            }
        ]
    },
    {
        title: 'universe/introduction',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/xvtmXF3KYc7c3XyICMHiT0C2ew3WdHY7',
                duration: '1'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/Ol5Y9Nrjf5D2g2En3yCkeY1hKKdPywoQ',
                duration: '1'
            }
        ]
    },
    {
        title: 'borders',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/6N9kCwEnRuZqu7PiKnHR2hZE5drBdduY',
                duration: '4'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/BIWu8OIBDXSteDuphqrM61abyD0HiF49',
                duration: '5'
            }
        ]
    },
    {
        title: 'life',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/whpZmUZAJtHgp7SXMvz93MJ5V7P1SNjn',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/dSRL98qBzlLEB3WHFTsycIAY1F6OC1Rn',
                duration: '4'
            }
        ]
    },
    {
        title: 'eras',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/D6AX0FEqV4bvUu2EMeIR1eTcW7QSfuYN',
                duration: '8'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/5WlpNkxC0XE7snkHTBsgWad3VOtzy8xH',
                duration: '10'
            }
        ]
    },
    {
        title: 'death',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/a6DdVWAMIL7r0NK7jjGIfPyhaEDLRgNF',
                duration: '2'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/SoLg7ztL0C3yI7NngCZmOOnFJjv95NIl',
                duration: '2'
            }
        ]
    },
    {
        title: 'philosophy',
        languages: [
            {
                id: 'en',
                src: 'https://audio.jukehost.co.uk/utJrRaIMRgoguQQsh02iDithZbF0jhwQ',
                duration: '3'
            },
            {
                id: 'de',
                src: 'https://audio.jukehost.co.uk/AXD6euKc0Q6J1vKfPIPcWBA9pGdlBhlz',
                duration: '4'
            }
        ]
    },
]

export default audiobookArray;