import Typography from '../../../dls/Typography/Typography';
import { generateStyles } from './PaymentSummary.styles';
import { IPaymentSummaryProps } from './PaymentSummary.types';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

const PaymentSummary = (props: IPaymentSummaryProps) => {
	const {
		amountSummary = [],
		// cartTotal,
		handleOnPaceOrder,
	} = props;

	// We can use above cartTotal for payment summary but its better to get the pricing summary from seperate API, This logic should be in backend rather that frontend

	const theme = useTheme();

	const styles = generateStyles(theme);

	return (
		<View style={styles.mainContainer}>
			<Typography variant='heading-sm-bold' style={styles.heading}>
				{'Payment Summary'}
			</Typography>
			<View style={styles.summary}>
				{amountSummary.map((item) => {
					const {
						id = '',
						backgroundColor = theme.DLS.COLOR.SECONDARY[500],
					} = item || {};
					return (
						<View key={id} style={styles.amountSummaryContainer}>
							<View
								style={[
									styles.amountSummary,
									{
										backgroundColor,
									},
								]}
							>
								<Typography
									variant='body-base-bold'
									color={
										item.titleColor
											? item.titleColor
											: theme.DLS.COLOR.PRIMARY[200]
									}
									style={styles.title}
								>
									{item.title}
								</Typography>
								<Typography
									variant='body-base-bold'
									color={
										item.valueColor
											? item.valueColor
											: theme.DLS.COLOR.PRIMARY[300]
									}
									style={styles.value}
								>
									{item.value}
								</Typography>
							</View>
							{!!item.showDashedLine && (
								<View style={styles.dashedLineContainer} />
							)}
						</View>
					);
				})}
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={handleOnPaceOrder}
				style={styles.buttonContainer}
			>
				<Typography
					variant={'cta-label-bold'}
					style={styles.buttonText}
				>
					{'Place Order'}
				</Typography>
			</TouchableOpacity>
		</View>
	);
};

export default PaymentSummary;
