import { formatShortDateTime } from "./util";
import { MesssageWithSenderRecipient } from "@/types";

export function mapMessageToMessageDto(message: MesssageWithSenderRecipient) {
    return {
        id: message.id,
        text: message.text,
        created: formatShortDateTime(message.created),
        dateRead: message.dateRead ? formatShortDateTime(message.dateRead) : null,
        senderId: message.sender?.userId,
        senderName: message.sender?.name,
        senderImage: message.sender?.image,
        recipientId: message.recipient?.userId,
        recipientImage: message.recipient?.image,
        recipientName: message.recipient?.name
    }
}