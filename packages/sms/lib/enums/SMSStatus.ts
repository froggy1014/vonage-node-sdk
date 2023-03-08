export enum SMSStatus {
    SUCCESS = '0',
    THROTTLED = '1',
    MISSING_REQUIRED_PARAM = '2',
    INVALID_PARAM = '3',
    INVALID_CREDENTIALS = '4',
    INTERNAL_ERROR = '5',
    INVALID_MESSAGE = '6',
    BARRED_NUMBER = '7',
    PARTNER_ACCOUNT_BARRED = '7',
    PARTNER_QUOTA_violation = '9',
    TOO_MANY_EXISTING_BINDS = '10',
    ACCOUNT_NOT_ENABLED = '11',
    MESSAGE_TOO_LONG = '12',
    INVALID_SIGNATURE = '14',
    INVALID_SENDER_ADDRESS = '15',
    INVALID_NETWORK_CODE = '22',
    INVALID_CALLBACK_URL = '23',
    NON_WHITELISTED_DESTINATION = '29',
    SIGNATURE_AND_API_SECRET_DISALLOWED = '32',
    NUMBER_DEACTIVATED = '33',
}
