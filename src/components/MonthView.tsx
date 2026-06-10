import { useState } from "react";
import { ActionIcon, Group, Button, Modal } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { MobileMonthView } from "@mantine/schedule";
import { MonthPicker } from "@mantine/dates";
import dayjs from "dayjs";
import "dayjs/locale/fr";

export function MonthView() {
    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format("YYYY-MM-DD"));
    const [monthPickerOpened, setMonthPickerOpened] = useState(false);

    return (
        <>
            <MobileMonthView
                date={date}
                onDateChange={setDate}
                selectedDate={selectedDate}
                onSelectedDateChange={setSelectedDate}
                locale="fr"
                styles={{
                    mobileMonthViewHeader: { paddingInline: 0 },
                    mobileMonthViewCalendar: { paddingInline: 0 },
                    mobileMonthViewEventsList: { paddingInline: 0 },
                }}
                renderHeader={({ date: headerDate }) => (
                    <Group gap="xs">
                        <ActionIcon
                            variant="default"
                            size="lg"
                            onClick={() => setDate(dayjs(headerDate).subtract(1, "month").format("YYYY-MM-DD"))}
                        >
                            <IconChevronLeft size={18} />
                        </ActionIcon>
                        <Button variant="default" size="sm" w={105} onClick={() => setMonthPickerOpened(true)}>
                            {dayjs(headerDate).locale("fr").format("MMM YYYY")}
                        </Button>
                        <ActionIcon
                            variant="default"
                            size="lg"
                            onClick={() => setDate(dayjs(headerDate).add(1, "month").format("YYYY-MM-DD"))}
                        >
                            <IconChevronRight size={18} />
                        </ActionIcon>
                        <Button
                            variant="default"
                            size="sm"
                            onClick={() => {
                                const today = dayjs().format("YYYY-MM-DD");
                                setDate(today);
                                setSelectedDate(today);
                            }}
                        >
                            Aujourd'hui
                        </Button>
                    </Group>
                )}
            />

            <Modal
                opened={monthPickerOpened}
                onClose={() => setMonthPickerOpened(false)}
                title="Sélectionner le mois"
                size="auto"
                centered
            >
                <MonthPicker
                    value={date}
                    onChange={(value) => {
                        if (value) {
                            setDate(dayjs(value).format("YYYY-MM-DD"));
                            setMonthPickerOpened(false);
                        }
                    }}
                    locale="fr"
                />
            </Modal>
        </>
    );
}
