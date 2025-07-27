export interface MemberCardType {
    name: string
    img: any
    distance: string
    title: Title[]
    maximumBooking: string
    rate: string
    flex?: boolean
}
export interface Title {
    usage: TitleEnum
    value: string
}

export enum TitleEnum {
    Instructor,
    Band
}

//todo: restructor
// each membar can have 2 profiles
// profiles can have multiple jobs
//each job has its own set have max booking hours & rate
// distance is independent
// flex is independent
// img is independent

export const memberInfo: MemberCardType[] = [
    {
        name: "Darryl Granberry",
        img: '/members/darryl-grandberry.png',
        distance: '2 miles away',
        title: [{ usage: TitleEnum.Band, value: 'Lead Producer' }],
        maximumBooking: '10 hours',
        rate: '52',
        flex: false

    }, {
        name: "Jazmine Sullivan",
        img: '/members/jazmine-sullivan.png',
        distance: '10 miles away',
        title: [
            { usage: TitleEnum.Band, value: 'Lead Vocalist' },
            { usage: TitleEnum.Instructor, value: 'Vocal Coach' }
        ],

        maximumBooking: '4 hours',
        rate: '31',
        flex: true
    }, {
        name: "Leon Thomas",
        img: '/members/leon-thomas.png',
        distance: '15 miles away',
        title: [
            { usage: TitleEnum.Instructor, value: 'Guitar Instructor' },
            { usage: TitleEnum.Band, value: 'Lead Guitarist' },
            { usage: TitleEnum.Band, value: 'Lead Producer' },
        ],
        maximumBooking: '2 hours',
        rate: '25',
        flex: true
    },
    {
        name: "Halle Bailey",
        img: '/members/halle-bailey.png',
        distance: '3.5 miles away',
        title: [{ usage: TitleEnum.Band, value: 'Piano Instuctor' },
        { usage: TitleEnum.Instructor, value: 'Lead Vocalist' }],
        maximumBooking: '1.5 hours',
        rate: '45',
        flex: true
    }]