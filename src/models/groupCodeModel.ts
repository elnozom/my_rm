
export type mainGroupResponse = {
    GroupCode: number
    GroupName: string
    Icon: string
}
export type subGroupResponse = {
    GroupCode: number
    GroupName: string
    ImagePath: string
}


export type productResponse = {
    ItemSerial: number
    ItemPrice: number
    ItemCode: number
    ItemName: string
    ItemDesc: string
    ImagePath: string
    WithModifier: boolean
    Screen: number
    ScreenTimes: number
    OrderItemSerial: number
    Qnt: number
    MainModSerial: number
    AddItems: string
    Printed: boolean

}