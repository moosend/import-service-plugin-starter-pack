
export interface FiltersRequest {
    AuthString?: string
}

/*
 *types that are returned when client wants to make a UI, he must know what HTML elements to draw
 *
 */

export interface UICollectionResponse {
    UIElements: Array<UIElement>
}

/**
 * Id must be unique
 */
export interface UIElement {
    Id: string,
    HtmlTag: 'input' | 'select' | 'textarea',
    InputType: 'text' | 'password' | 'button' | 'file' | 'checkbox' | 'radio',
    Name: string,
    Required: boolean,
    Label: string,
    Value?: string,
    Order: number,
    Options?: Array<OptionElement>,
    IsMultiple?: boolean
}

export interface OptionElement {
    Value: string,
    Text: string,
    Label?: string,
    Selected?: boolean
}