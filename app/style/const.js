import { getXdp } from 'utils/appUtils';

export const vw = getXdp(1);

// *********   values   *********
export const GAP_A = 3 * vw;
export const mainTitle = {
    fontSize: 22,
};
export const description = {
    fontSize: 12,
};
export const buttonText = {
    fontSize: 11,
};
export const infoText = {
    fontSize: 9,
};

// *********   colors   *********
export const PRIMARY_COLOR = '#660033';
export const SECONDARY_COLOR = '#FF146A';
export const BLACK = '#0A0A0A';
export const WHITE = '#FFFFFF';

export const DARKGRAY = '#212121';
export const MIDGRAY = '#C7C7CC';
export const LIGHTGRAY = '#969696';
export const GRAY = '#424242';
export const BACKGROUND_GRAY = '#F6F6F6';

export const ERROR_COLOR = '#F2412A';
export const SUCCESS_COLOR = '#C7C7CC';
export const INFO_COLOR = '#6298FF';
export const WARNING_COLOR = '#FFBA43';

// *********   Typography   *********
export const Headline = {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: DARKGRAY,
};

export const BRAND_NAME = {
    fontSize: 10,
    fontWeight: '700',
    color: DARKGRAY,
};

export const PRODUCT_NAME = {
    fontSize: 10,
    color: GRAY,
};

export const ORIGINAL_PRICE = {
    fontSize: 12,
    fontWeight: '700',
    color: BLACK,
};

export const SELLING_PRICE = {
    fontSize: 12,
    fontWeight: '700',
    color: PRIMARY_COLOR,
};

export const RETAIL_PRICE = {
    fontSize: 10,
    textDecorationLine: 'line-through',
    textAlignVertical: 'center',
    color: GRAY,
};
export const BUTTON_TEXT = {
    fontSize: 12,
    letterSpacing: 1.2,
    textAlignVertical: 'center',
};

export const DROPDOWN_TITLE = {
    fontSize: 12,
    color: BLACK,
};

export const DROPDOWN_BRIEF = {
    fontSize: 10,
    color: MIDGRAY,
    marginTop: 1 * vw,
};

export const DROPDOWN_RADIO = {
    fontSize: 14,
    alignSelf: 'center',
};

export const DROPDOWN_ICON = {
    fontSize: 16,
    flex: 1,
    alignSelf: 'flex-end',
    marginBottom: 2 * vw,
};

export const DROPDOWN_RADIO_TEXT = {
    marginLeft: 3 * vw,
    fontSize: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: GRAY,
};

const constants = {
    GAP_A,


    PRIMARY_COLOR,
    SECONDARY_COLOR,
    BLACK,
    WHITE,

    DARKGRAY,
    MIDGRAY,
    LIGHTGRAY,
    GRAY,
    BACKGROUND_GRAY,

    ERROR_COLOR,
    SUCCESS_COLOR,
    INFO_COLOR,
    WARNING_COLOR,
};
export default constants;
